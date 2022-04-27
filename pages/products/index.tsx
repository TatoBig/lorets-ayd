import Card from 'components/core/Card'
import Table from 'components/core/Table'
import useProducts from 'hooks/useProducts'
import DefaultLayout from 'layouts/DefaultLayout'
import { ProductList } from 'models/Product'
import { fetchData } from 'services/fetchData'
import { dateFormat, moneyFormat } from 'services/filters'

export async function getServerSideProps () {
  const products = await fetchData('products')
  console.log(products)
  return { props: { products } }
}

type Props = {
  products: ProductList
}

const Page = ({ products }: Props) => {
  const { deleteProduct } = useProducts()

  return (
    <DefaultLayout title="Productos" action={{ link: '/products/new', name: 'Crear producto' }}>
      <Card max>
        <Table
          onDelete={(id) => deleteProduct(id)}
          headcells={[
            { title: 'Nombre', id: 'name' },
            { title: 'Existencias', id: 'stock' },
            { title: 'Precio', id: 'price' },
            { title: 'Creado en', id: 'createdAt' },
            { title: 'Eliminar', id: 'delete' }
          ]}
          rows={Object.keys(products).map(key => {
            return {
              ...products[key],
              price: moneyFormat('GTQ', products[key].price),
              createdAt: dateFormat(products[key].createdAt)
            }
          })}
          subtitle="Listado de productos"
        />
      </Card>
    </DefaultLayout>
  )
}

export default Page
