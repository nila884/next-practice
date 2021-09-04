
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { userName,email,password } = req.body;

 
  const result = await prisma.user.create({
    data: {
      name: userName,
      email: email,
      password:password
    },
  });
  res.json(result);
}
