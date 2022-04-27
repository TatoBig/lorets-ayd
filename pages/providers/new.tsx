import { Button, Input, useToast } from '@chakra-ui/react'
import Card from 'components/core/Card'
import useProviders from 'hooks/useProviders'
import DefaultLayout from 'layouts/DefaultLayout'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { newProvider } = useProviders()
  const router = useRouter()
  const toast = useToast()

  const onSubmit = async (data) => {
    const response = await newProvider(data)
    if (response === 'success') {
      toast({
        title: 'Cliente guardado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
      router.push('/providers')
    }
  }

  return (
    <DefaultLayout title="Crear proveedor" max={false}>
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
            placeholder="Nit"
            {...register('nit')}
            className="mb-3"
            size="lg"
          />
          <Input
            placeholder="Teléfono"
            {...register('phone')}
            className="mb-3"
            size="lg"
          />
          <Input
            placeholder="Dirección"
            {...register('address')}
            className="mb-3"
            size="lg"
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
