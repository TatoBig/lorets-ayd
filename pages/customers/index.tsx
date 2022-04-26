import Table from 'components/core/Table'
import DefaultLayout from 'layouts/DefaultLayout'
import { CustomerList } from 'models/Customer'
import { fetchData } from 'services/fetchData'

export async function getServerSideProps () {
  const customers = await fetchData('customers')
  console.log(customers)
  return { props: { customers } }
}

type Props = {
  customers: CustomerList
}

const Page = ({ customers }: Props) => {
  return (
    <DefaultLayout title="Clientes" action={{ link: '/customers/new', name: 'Crear cliente' }}>
      <Table
        headcells={[
          { title: 'Nombre', id: 'name' },
          { title: 'NIT', id: 'nit' },
          { title: 'Telefono', id: 'phone' },
          { title: 'Dirección', id: 'address' },
          { title: 'Creado en', id: 'createdAt' }
        ]}
        rows={Object.keys(customers).map(key => {
          return {
            ...customers[key]
          }
        })}
        subtitle="Listado de clientes"
      />
    </DefaultLayout>
  )
}

export default Page
