import { HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import Card from 'components/core/Card'
import Modal from 'components/core/Modal'
import Table from 'components/core/Table'
import DefaultLayout from 'layouts/DefaultLayout'
import { CustomerList } from 'models/Customer'
import { ProductList } from 'models/Product'
import { SaleList } from 'models/Sale'
import { SaleDetailList } from 'models/SaleDetail'
import { useState } from 'react'
import { fetchData } from 'services/fetchData'
import { dateFormat, moneyFormat } from 'services/filters'

export async function getServerSideProps () {
  const sales = await fetchData('sales')
  const saleDetails = await fetchData('saleDetails')
  const customers = await fetchData('customers')
  const products = await fetchData('products')
  console.log(sales)
  return { props: { sales, customers, saleDetails, products } }
}

type Props = {
  sales: SaleList
  customers: CustomerList
  saleDetails: SaleDetailList
  products: ProductList
}

const Page = ({ sales, customers, saleDetails, products }: Props) => {
  const [saleId, setSaleId] = useState<undefined | string>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleIsOpen = (id: string) => {
    setSaleId(id)
    onOpen()
  }

  const getDetails = (saleId: string) => {
    return Object.keys(saleDetails).map(key => saleDetails[key]).filter(detail => detail.saleId === saleId).map((detail, index) => (
      <div key={detail.id} className="font-helvetica mb-4">
        <div className="font-bold text-lg">
          Detalle {index + 1}
        </div>
        <div>
          Producto: {products[detail.productId].name}
        </div>
        <div>
          Cantidad vendida: {detail.quantity}
        </div>
        <div>
          Subtotal: {moneyFormat('GTQ', detail.total)}
        </div>
      </div>
    ))
  }

  return (
    <DefaultLayout title="Ventas" action={{ link: '/sales/new', name: 'Realizar venta' }}>
      <Card max>
        <Table
          headcells={[
            { title: 'Nit', id: 'nit' },
            { title: 'Cliente', id: 'customer' },
            { title: 'Total', id: 'total' },
            { title: 'Creado en', id: 'createdAt' },
            { title: 'Detalle', id: 'detail' }
          ]}
          rows={Object.keys(sales).map(key => {
            return {
              ...sales[key],
              customer: customers[sales[key]?.customerId]?.name ?? '',
              createdAt: dateFormat(sales[key].createdAt),
              total: moneyFormat('GTQ', sales[key].total),
              detail: (
                <HamburgerIcon onClick={() => handleIsOpen(key)} className="ml-4 cursor-pointer" />
              )
            }
          })}
          subtitle="Listado de ventas"
        />
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} title="Detalle de venta">
        {saleId && getDetails(saleId)}
      </Modal>
    </DefaultLayout>
  )
}

export default Page
