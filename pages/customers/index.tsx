import Card from 'components/core/Card'
import Table from 'components/core/Table'
import useCustomers from 'hooks/useCustomers'
import DefaultLayout from 'layouts/DefaultLayout'
import { CustomerList } from 'models/Customer'
import { fetchData } from 'services/fetchData'
import { dateFormat } from 'services/filters'

export async function getServerSideProps () {
  const customers = await fetchData('customers')
  console.log(customers)
  return { props: { customers } }
}

type Props = {
  customers: CustomerList
}

const Page = ({ customers }: Props) => {
  const { deleteCustomer } = useCustomers()

  return (
    <DefaultLayout title="Clientes" action={{ link: '/customers/new', name: 'Crear cliente' }}>
      <Card max>
        <Table
          onDelete={(id) => deleteCustomer(id)}
          headcells={[
            { title: 'Nombre', id: 'name' },
            { title: 'Nit', id: 'nit' },
            { title: 'Telefono', id: 'phone' },
            { title: 'Dirección', id: 'address' },
            { title: 'Creado en', id: 'createdAt' },
            { title: 'Eliminar', id: 'delete' }
          ]}
          rows={Object.keys(customers).map(key => {
            return {
              ...customers[key],
              createdAt: dateFormat(customers[key].createdAt)
            }
          })}
          subtitle="Listado de clientes"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
