import { Button, Input, useToast } from '@chakra-ui/react'
import Card from 'components/core/Card'
import useUsers from 'hooks/useUsers'
import DefaultLayout from 'layouts/DefaultLayout'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { newUser } = useUsers()
  const router = useRouter()
  const toast = useToast()

  const onSubmit = async (data: any) => {
    const response = await newUser(data)
    if (response === 'success') {
      toast({
        title: 'Usuario guardado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
      router.push('/users')
    }
    console.log(response)
  }

  return (
    <DefaultLayout title="Crear usuario" max={false}>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] my-4">
          <div className="mb-2">
            <Input
              placeholder="Nombre"
              {...register('name', { required: true })}
              size="lg"
              className="mb-1"
            />
            <span className="ml-3">
              {(errors.name && 'Debe ingresar un nombre') || ' '}
            </span>
          </div>
          <Input
            placeholder="Correo"
            {...register('email', { required: true })}
            className="mb-3"
            size="lg"
            type="email"
            
          />
          <Input
            placeholder="Contraseña"
            {...register('password', { required: true })}
            className="mb-3"
            size="lg"
            type="password"
          />
          <div className="flex flex-row-reverse">
            <Button bg="#4F46E5" color="#ffffff" colorScheme="purple" type="submit">Guardar</Button>
          </div>
        </form>
      </Card>
    </DefaultLayout>
  )
}

export default Page
