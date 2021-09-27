import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

/* JWT secret key */
const KEY = "niyeraniyeraniyera";
export default async function handle(req, res) {
// const auth= async (req, res) => {
  // return new Promise(resolve => {
    const { method } = req;
    try {
      switch (method) {
        case 'POST':
          /* Get Post Data */
          const { email, password } = req.body;
          /* Any how email or password is blank */
          if (!email || !password) {
            return res.status(400).json({
              status: 'error',
              error: 'Request missing username or password',
            });
          }
          /* Check user email in database */
          const user = await prisma.user.findUnique({
            where: {
              email: email,
            },
          })
          /* Check if exists */
          if (!user) {
            /* Send error with message */
            res.status(400).json({ status: 'error', error: 'User Not Found' });
          }
          /* Variables checking */
          if (user) {
            
            const userId = user.id,
              userEmail = user.email,
              userCompanyId=user.companyId,
              userPassword = user.password,
              userCreated = user.createdAt;

              const company = await prisma.companies.findUnique({
                where: {
                  id: userCompanyId
                },
              }).then(company=>{

                bcrypt.compare(password, userPassword).then(isMatch => {
                  /* User matched */
                  if (isMatch) {
    
                    

                    /* Create JWT Payload */
                    const payload = {
                      id: userId,
                      email: userEmail,
                      userCompanyId:userCompanyId,
                      companyName:company.name,
                      createdAt: userCreated,
                      
                    };
                   console.log(payload) 
                    /* Sign token */
                    jwt.sign(
                      payload,
                      KEY,
                      {
                        expiresIn: 3600, // 1 h in seconds
                      },
                      (err, token) => {
                        /* Send succes with token */
                        
                        res.status(200).json({
                          success: true,
                          token: 'Bearer ' + token,
                        });
                        
                      },
                    );
                  } else {
                    /* Send error with message */
                    res
                      .status(400)
                      .json({ status: 'error', error: 'Password incorrect' });
                  }
                });
                
              })
            /* Check and compare password */

          }
          break;
        case 'PUT':
          break;
        case 'PATCH':
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }

};