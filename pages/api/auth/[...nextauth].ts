import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()

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
          bcrypt.compare(credentials.Password,user.password).then(isMatch => {
              if(isMatch){
                return user 
              }
             else{
                return null
              }
        } 
      )}else{

        return null
      }
      
      },
    }),
  ],
  session: {
    jwt: true,
  },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) =>
  NextAuth(req, res, configuration)
