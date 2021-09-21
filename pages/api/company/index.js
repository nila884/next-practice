import prisma from '../../../lib/prisma';

export default async function handle(req) {
  const { companyName} = req.body;
 const newCompany= await prisma.companies.create({
    data: {
      name: companyName 
    },
  })
}