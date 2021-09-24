import prisma from '../../../lib/prisma';
export default async function handle(req, res) {

    switch(req.method){
        case "GET":
          await getCompany(req,res) 
          break; 
        case "DELETE":
          await deleteCompany(req,res)
          break;
    }

//     const user =  prisma.companies.findUnique({
//         where: {
//           id: req.query.id
//         },
//       })
    
//       console.log(user)
//   // console.log(result)
//   res.json(user);

}

const getCompany = async (req,res)=>{
    const {pid } =  req.query
     const company = user =  prisma.companies.findUnique({
        where: {
          id: req.query.id
        },
      })
     res.status(200).json(company)
}

const deleteCompany = async (req,res)=>{
    const {pid } =  req.query
    console.log("deleted")
    res.status(200).json({})
}

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('/api/company')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { id: post.id },
    }))
}