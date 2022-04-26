import DefaultLayout from 'layouts/DefaultLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <DefaultLayout title="Bienvenido">
      <div>
        Test
      </div>
    </DefaultLayout>
  )
}

export default Home
