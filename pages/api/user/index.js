import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs'

export default async function handle(req, res) {
  const { userName,email,password,companyName} = req.body;
  if(!userName || !email || !password){
    return res.status(422).json({error:"please fill in all fields"})
  }   
   const newCompany= await prisma.companies.create({
      data: {
        name: companyName 
      },
    })
  
  const hashedPassword = await bcrypt.hash(password,12)

  // console.log(prisma)
  const result = await prisma.user.create({
    data: {
      name: userName,
      email: email,
      password: hashedPassword,
      companyId: newCompany.id
    },
  });
  // console.log(result)
  res.json(result);

}