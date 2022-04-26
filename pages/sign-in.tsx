import type { NextPage } from 'next'
import { Button, Input } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const SignIn: NextPage = () => {
  const router = useRouter()
  return (
    <div className="bg-gradient-to-b from-[#9FD4FE] to-[#D0CEFF] w-screen h-screen flex items-center justify-center flex-col">
      <div className="bg-gray-200 w-1/4 h-auto p-8 rounded-md shadow-md items-center justify-center flex flex-col">
        <div className="font-sans italic text-5xl">
          Sistema Lorets
        </div>
        <div className="w-full h-[2px] my-6 bg-gray-300" />
        <div className="flex items-center flex-col w-full">
          <span className="text-xl mb-6">
            Ingreso
          </span>
          <Input variant="filled" className="mb-2" placeholder="Correo electrónico" size="lg" />
          <Input variant="filled" className="mb-6" placeholder="Contraseña" size="lg" type="password" />
          <Button
            width="full"
            colorScheme="blue"
            onClick={() => router.push('/')}
          >
            Ingresar
          </Button>
        </div>

      </div>
      <div className="bg-gray-200 mt-4 w-60 h-10 rounded-md shadow-md">

      </div>
    </div>
  )
}

export default SignIn
