import { PrismaClient } from '@prisma/client'
import UsuarioServices from './Services/UsuarioServices'

const prisma = new PrismaClient()

async function main() {
    await UsuarioServices.createUsuario(
        {email: 'Cainan@gmail.com',
        nome: 'CAINAN'}
    )
    console.log(await UsuarioServices.listUsuarios())
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })