import { AtSignIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { auth } from 'services/firebase'
import DrawerLink from './DrawerLink'

const drawerData = [
  {
    title: 'Clientes',
    link: '/customers',
    icon: <AtSignIcon />
  },
  {
    title: 'Proveedores',
    link: '/providers',
    icon: <AtSignIcon />
  },
  {
    title: 'Compras',
    link: '/purchases',
    icon: <AtSignIcon />
  },
  {
    title: 'Ventas',
    link: '/sales',
    icon: <AtSignIcon />
  },
  {
    title: 'Productos',
    link: '/products',
    icon: <AtSignIcon />
  },
  {
    title: 'Usuarios',
    link: '/users',
    icon: <AtSignIcon />
  }
]

const Drawer = () => {
  return (
    <div className="px-5 mr-4 my-4 w-64 font-bold">
      <Link href="/" passHref>
        <div className="cursor-pointer text-2xl font-helvetica w-full flex justify-center">
          Sistema Lorets
        </div>
      </Link>
      <div className="bg-gray-300 w-full h-[1px] my-4" />
      <div>
        {drawerData.map(item => (
          <DrawerLink
            key={item.title}
            item={item}
          />
        ))}
        <div onClick={() => auth.signOut()} className="fixed bottom-0 w-56 cursor-pointer mb-4 p-4 pl-6 flex text-gray-700 items-center hover:bg-gray-100 transition-all rounded-3xl hover:shadow-xl">
          <div className="mr-4">
            <AtSignIcon />
          </div>
          Salir
        </div>
      </div>
    </div>
  )
}

export default Drawer
