import prisma from '../../../lib/prisma';

export default async function handle(req,res) {
  const { companyName} = req.body;
  const result= await prisma.user.findMany()

  res.json(result);
}