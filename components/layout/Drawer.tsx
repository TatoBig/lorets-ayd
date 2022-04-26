import { AtSignIcon } from '@chakra-ui/icons'
import Link from 'next/link'
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
      </div>
    </div>
  )
}

export default Drawer
