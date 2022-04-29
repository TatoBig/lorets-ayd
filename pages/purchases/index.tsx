import { HamburgerIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react'
import Card from 'components/core/Card'
import Modal from 'components/core/Modal'
import Table from 'components/core/Table'
import DefaultLayout from 'layouts/DefaultLayout'
import { ProviderList } from 'models/Provider'
import { ProductList } from 'models/Product'
import { PurchaseList } from 'models/Purchase'
import { PurchaseDetailList } from 'models/PurchaseDetail'
import { useState } from 'react'
import { fetchData } from 'services/fetchData'
import { dateFormat, moneyFormat } from 'services/filters'

export async function getServerSideProps () {
  const purchases = await fetchData('purchases')
  const purchaseDetails = await fetchData('purchaseDetails')
  const providers = await fetchData('providers')
  const products = await fetchData('products')
  return { props: { purchases, providers, purchaseDetails, products } }
}

type Props = {
  purchases: PurchaseList
  providers: ProviderList
  purchaseDetails: PurchaseDetailList
  products: ProductList
}

const Page = ({ purchases, providers, purchaseDetails, products }: Props) => {
  const [purchaseId, setPurchaseId] = useState<undefined | string>(undefined)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleIsOpen = (id: string) => {
    setPurchaseId(id)
    onOpen()
  }

  const getDetails = (purchaseId: string) => {
    return Object.keys(purchaseDetails).map(key => purchaseDetails[key]).filter(detail => detail.purchaseId === purchaseId).map((detail, index) => (
      <div key={detail.id} className="font-helvetica mb-4">
        <div className="font-bold text-lg">
          Detalle {index + 1}
        </div>
        <div>
          Producto: {products[detail.productId].name}
        </div>
        <div>
          Cantidad comprada: {detail.quantity}
        </div>
        <div>
          Subtotal: {moneyFormat('GTQ', detail.total)}
        </div>
      </div>
    ))
  }

  return (
    <DefaultLayout title="Compras" action={{ link: '/purchases/new', name: 'Realizar compra' }}>
      <Card max>
        <Table
          headcells={[
            { title: 'Nit', id: 'nit' },
            { title: 'Proveedor', id: 'provider' },
            { title: 'Total', id: 'total' },
            { title: 'Creado en', id: 'createdAt' },
            { title: 'Detalle', id: 'detail' }
          ]}
          rows={Object.keys(purchases).map(key => {
            return {
              ...purchases[key],
              provider: providers[purchases[key]?.providerId]?.name ?? '',
              createdAt: dateFormat(purchases[key].createdAt),
              total: moneyFormat('GTQ', purchases[key].total),
              detail: (
                <HamburgerIcon onClick={() => handleIsOpen(key)} className="ml-4 cursor-pointer" />
              )
            }
          })}
          subtitle="Listado de compras"
        />
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} title="Detalle de compra">
        {purchaseId && getDetails(purchaseId)}
      </Modal>
    </DefaultLayout>
  )
}

export default Page
