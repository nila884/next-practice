
// import prisma from '../../../lib/prisma';
// import User from '../..//User'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// initDB()

// const auth= async (req,res)=>{
//      const {email,password} = req.body
//      try{
//         if(!email || !password){
//           return res.status(422).json({error:"please ass all the fields"})
//         }
//       const user = await User.findOne({email})
//       if(!user){
//           return res.status(404).json({error:"user dont exists with that email"})
//       }
//         const doMatch =  await bcrypt.compare(password,user.password)
//         if(doMatch){
//            const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
//                 expiresIn:"7d"
//             })
//             const {name,role,email} = user
//             res.status(201).json({token,user:{name,role,email}})
//         }else{
//            return res.status(401).json({error:"email or password dont match"})
//         }
//      }catch(err){
//          console.log(err)
//      }
// }
// export default auth;
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

/* JWT secret key */
const KEY = process.env.JWT_KEY;
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
          // const user = USERS.find(user => {
          //   return user.email === email;
          // });
          /* Check if exists */
          if (!user) {
            /* Send error with message */
            res.status(400).json({ status: 'error', error: 'User Not Found' });
          }
          /* Variables checking */
          if (user) {
            console.log(user)
            const userId = user.id,
              userEmail = user.email,
              userPassword = user.password,
              userCreated = user.createdAt;
            /* Check and compare password */
            bcrypt.compare(password, userPassword).then(isMatch => {
              /* User matched */
              if (isMatch) {
                /* Create JWT Payload */
                const payload = {
                  id: userId,
                  email: userEmail,
                  createdAt: userCreated,
                };
                /* Sign token */
                jwt.sign(
                  payload,
                  KEY,
                  {
                    expiresIn: 31556926, // 1 year in seconds
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
  //   return resolve();
  // });
};