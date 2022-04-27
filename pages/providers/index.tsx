import Card from 'components/core/Card'
import Table from 'components/core/Table'
import useProviders from 'hooks/useProviders'
import DefaultLayout from 'layouts/DefaultLayout'
import { ProviderList } from 'models/Provider'
import { fetchData } from 'services/fetchData'
import { dateFormat } from 'services/filters'

export async function getServerSideProps () {
  const providers = await fetchData('providers')
  console.log(providers)
  return { props: { providers } }
}

type Props = {
  providers: ProviderList
}

const Page = ({ providers }: Props) => {
  const { deleteProvider } = useProviders()

  return (
    <DefaultLayout title="Proveedores" action={{ link: '/providers/new', name: 'Crear proveedor' }}>
      <Card max>
        <Table
          onDelete={(id) => deleteProvider(id)}
          headcells={[
            { title: 'Nombre', id: 'name' },
            { title: 'Nit', id: 'nit' },
            { title: 'Telefono', id: 'phone' },
            { title: 'Dirección', id: 'address' },
            { title: 'Creado en', id: 'createdAt' },
            { title: 'Eliminar', id: 'delete' }
          ]}
          rows={Object.keys(providers).map(key => {
            return {
              ...providers[key],
              createdAt: dateFormat(providers[key].createdAt)
            }
          })}
          subtitle="Listado de proveedores"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
