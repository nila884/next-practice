import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient()
let userToReturn
let companyToReturn
const configuration = {
  providers: [
    Providers.Credentials({
      name: 'credentials',
      credentials: {
        Email: {
          type: 'text',
          placeholder: 'Email',
        },
        Password: {
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.Email,
          },
        })

        if (user) {
          const company = await prisma.companies.findUnique({
            where: {
              id: user.companyId
            },
          })
          const isMatch=await bcrypt.compare(credentials.Password, user.password)
          if(isMatch){
            userToReturn=user
            companyToReturn=company
            return user
          }else{
            return null
          }
        } else {
          return null          
        }

        }
      })

  ],
  session: {
    jwt: true,
  },


  callbacks: {
    session: async (session, user) => {
      session.userId = userToReturn.id
      session.company = companyToReturn
     
      return session
    },
  },


}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, configuration)