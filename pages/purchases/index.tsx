import Card from 'components/core/Card'
import Table from 'components/core/Table'
import useCustomers from 'hooks/useCustomers'
import DefaultLayout from 'layouts/DefaultLayout'
import { ProviderList } from 'models/Provider'
import { PurchaseList } from 'models/Purchase'
import { PurchaseDetailList } from 'models/PurchaseDetail'
import { fetchData } from 'services/fetchData'
import { dateFormat, moneyFormat } from 'services/filters'

export async function getServerSideProps () {
  const purchases = await fetchData('purchases')
  const providers = await fetchData('providers')
  const purchaseDetails = await fetchData('purchaseDetails')
  console.log(purchases)
  return { props: { purchases, providers, purchaseDetails } }
}

type Props = {
  purchases: PurchaseList
  providers: ProviderList
  purchaseDetails: PurchaseDetailList
}

const Page = ({ purchases, providers, purchaseDetails }: Props) => {
  const { deleteCustomer } = useCustomers()

  return (
    <DefaultLayout title="Compras" action={{ link: '/purchases/new', name: 'Realizar compra' }}>
      <Card max>
        <Table
          onDelete={(id) => deleteCustomer(id)}
          headcells={[
            { title: 'Nit', id: 'nit' },
            { title: 'Proveedor', id: 'provider' },
            { title: 'Total', id: 'total' },
            { title: 'Creado en', id: 'createdAt' }
          ]}
          rows={Object.keys(purchases).map(key => {
            return {
              ...purchases[key],
              provider: providers[purchases[key]?.providerId]?.name ?? '',
              createdAt: dateFormat(purchases[key].createdAt),
              total: moneyFormat('GTQ', purchases[key].total)
            }
          })}
          subtitle="Listado de compras"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
