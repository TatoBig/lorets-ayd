import { Button, Input } from '@chakra-ui/react'
import useCustomers from 'hooks/useCustomers'
import DefaultLayout from 'layouts/DefaultLayout'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const { newCustomer } = useCustomers()
  const router = useRouter()

  const onSubmit = async (data) => {
    const response = await newCustomer(data)
    if (response === 'success') {
      router.push('/customers')
    }
    console.log(response)
  }

  console.log(watch('example')) // watch input value by passing the name of it

  return (
    <DefaultLayout title="Crear cliente" max={false}>
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
        <Button bg="#4F46E5" color="#ffffff" colorScheme="purple" type="submit">Guardar</Button>
      </form>
    </DefaultLayout>
  )
}

export default Page
