import Card from 'components/core/Card'
import Table from 'components/core/Table'
import DefaultLayout from 'layouts/DefaultLayout'
import { UserList } from 'models/User'
import { fetchData } from 'services/fetchData'
import { dateFormat } from 'services/filters'

export async function getServerSideProps () {
  const users = await fetchData('users')
  console.log(users)
  return { props: { users } }
}

type Props = {
  users: UserList
}

const Page = ({ users }: Props) => {
  return (
    <DefaultLayout title="Usuarios" action={{ link: '/users/new', name: 'Crear usuario' }}>
      <Card max>
        <Table
          headcells={[
            { title: 'Nombre', id: 'name' },
            { title: 'Correo', id: 'email' },
            { title: 'Creado en', id: 'createdAt' }
          ]}
          rows={Object.keys(users).map(key => {
            return {
              ...users[key],
              createdAt: dateFormat(users[key].createdAt)
            }
          })}
          subtitle="Listado de clientes"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
