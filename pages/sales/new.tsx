import { AddIcon } from '@chakra-ui/icons'
import { Button, Input, Select, useToast } from '@chakra-ui/react'
import Card from 'components/core/Card'
import IconButton from 'components/core/IconButton'
import useSales from 'hooks/useSales'
import DefaultLayout from 'layouts/DefaultLayout'
import { ProductList } from 'models/Product'
import { CustomerList } from 'models/Customer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { fetchData } from 'services/fetchData'

export async function getServerSideProps () {
  const products = await fetchData('products')
  const customers = await fetchData('customers')
  console.log(products)
  return { props: { products, customers } }
}

type Props = {
  products: ProductList
  customers: CustomerList
}

const Page = ({ products, customers }: Props) => {
  const { register, handleSubmit, formState: { errors }, control, setValue } = useForm()
  const [details, setDetails] = useState<number[]>([])
  const { newSale } = useSales()

  const router = useRouter()
  const toast = useToast()

  const customerId = useWatch({
    control,
    name: 'customerId'
  })

  useEffect(() => {
    if (customers[customerId]) {
      setValue('nit', customers[customerId].nit)
    }
  }, [customerId])

  const onSubmit = async (data: any) => {
    console.log(data)
    const response = await newSale(data, products, details.length)
    if (response === 'success') {
      toast({
        title: 'Venta realizada correctamente',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
      router.push('/sales')
    }
  }

  return (
    <DefaultLayout title="Realizar venta" max={false}>
      <div className="flex">
        <div className="h-min">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] my-4">
              <Select
                placeholder="Cliente"
                {...register('customerId')}
                size="lg"
                className="mb-3"
              >
                {Object.keys(customers).map(key => (
                  <option key={key} value={customers[key].id}>{customers[key].name}</option>
                ))}
              </Select>
              <Input
                placeholder="Nit"
                {...register('nit')}
                className="mb-3"
                size="lg"
              />
              <div className="flex flex-row-reverse">
                <Button bg="#4F46E5" color="#ffffff" colorScheme="purple" type="submit">Finalizar</Button>
              </div>
            </form>
          </Card>
        </div>
        <div>
          {details.map((_, index) => (
            <div key={index}>
              <Card>
                <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] my-4">
                  <div className="ml-1 mb-3 text-xl font-helvetica">
                    Detalle {index + 1}
                  </div>
                  <div className="mb-2">
                    <Select
                      placeholder="Producto"
                      {...register(`productId${index}`, { required: true })}
                      size="lg"
                      className="mb-0"
                    >
                      {Object.keys(products).map(key => (
                        <option key={key} value={products[key].id}>{products[key].name}</option>
                      ))}
                    </Select>
                    <span className="ml-3">
                      {(errors[`productId${index}`] && 'Debe seleccionar un producto') || ' '}
                    </span>
                  </div>
                  <Input
                    placeholder="Cantidad"
                    {...register(`quantity${index}`, { required: true })}
                    className="mb-3"
                    size="lg"
                  />
                  <span className="ml-3">
                    {(errors[`quantity${index}`] && 'Debe ingresar una cantidad') || ' '}
                  </span>
                </form>
              </Card>
              <div className="mb-3" />
            </div>
          ))}
          <IconButton
            item={{
              action: () => setDetails(prev => [...prev, 0]),
              title: 'Agregar detalle de venta',
              icon: <AddIcon />
            }}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Page
