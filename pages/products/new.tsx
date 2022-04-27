import { Button, Input, useToast } from '@chakra-ui/react'
import Card from 'components/core/Card'
import useProducts from 'hooks/useProducts'
import DefaultLayout from 'layouts/DefaultLayout'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { newProduct } = useProducts()
  const router = useRouter()
  const toast = useToast()

  const onSubmit = async (data) => {
    const response = await newProduct(data)
    if (response === 'success') {
      toast({
        title: 'Producto guardado correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
      router.push('/products')
    }
    console.log(response)
  }

  console.log(watch('example'))

  return (
    <DefaultLayout title="Crear producto">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] my-4">
          <div className="mb-2">
            <Input
              placeholder="Nombre"
              {...register('name', { required: true })}
              size="lg"
              className="mb-3"
            />
            <span className="ml-3">
              {(errors.name && 'Debe ingresar un nombre') || ' '}
            </span>
            <Input
              placeholder="Existencias"
              {...register('stock', { required: true })}
              size="lg"
              className="mb-3"
              type="number"
            />
            <span className="ml-3">
              {(errors.stock && 'Debe ingresar una cantidad inicial') || ' '}
            </span>
            <Input
              placeholder="Precio"
              {...register('price', { required: true })}
              size="lg"
              className="mb-3"
              type="number"
            />
            <span className="ml-3">
              {(errors.price && 'Debe ingresar un precio') || ' '}
            </span>
          </div>
          <div className="flex flex-row-reverse">
            <Button bg="#4F46E5" color="#ffffff" colorScheme="purple" type="submit">Guardar</Button>
          </div>
        </form>
      </Card>
    </DefaultLayout>
  )
}

export default Page
