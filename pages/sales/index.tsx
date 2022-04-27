import Card from 'components/core/Card'
import Table from 'components/core/Table'
import useCustomers from 'hooks/useCustomers'
import DefaultLayout from 'layouts/DefaultLayout'
import { CustomerList } from 'models/Customer'
import { SaleList } from 'models/Sale'
import { SaleDetailList } from 'models/SaleDetail'
import { fetchData } from 'services/fetchData'
import { dateFormat, moneyFormat } from 'services/filters'

export async function getServerSideProps () {
  const sales = await fetchData('sales')
  const customers = await fetchData('customers')
  const saleDetails = await fetchData('saleDetails')
  console.log(sales)
  return { props: { sales, customers, saleDetails } }
}

type Props = {
  sales: SaleList
  customers: CustomerList
  saleDetails: SaleDetailList
}

const Page = ({ sales, customers, saleDetails }: Props) => {
  const { deleteCustomer } = useCustomers()

  return (
    <DefaultLayout title="Ventas" action={{ link: '/sales/new', name: 'Realizar venta' }}>
      <Card max>
        <Table
          onDelete={(id) => deleteCustomer(id)}
          headcells={[
            { title: 'Nit', id: 'nit' },
            { title: 'Cliente', id: 'customer' },
            { title: 'Total', id: 'total' },
            { title: 'Creado en', id: 'createdAt' }
          ]}
          rows={Object.keys(sales).map(key => {
            return {
              ...sales[key],
              customer: customers[sales[key]?.customerId]?.name ?? '',
              createdAt: dateFormat(sales[key].createdAt),
              total: moneyFormat('GTQ', sales[key].total)
            }
          })}
          subtitle="Listado de ventas"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
