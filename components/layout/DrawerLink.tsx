import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  item: {
    title: string
    link: string
    icon?: ReactNode
  }
}

const DrawerLink = ({
  item
}: Props) => {
  return (
    <Link href={item.link} passHref>
      <div className="cursor-pointer mb-4 p-4 pl-6 flex text-gray-700 items-center hover:bg-gray-100 transition-all rounded-3xl hover:shadow-xl">
        {item.icon &&
          <div className="mr-4">
            {item.icon}
          </div>
        }
        {item.title}
      </div>
    </Link>
  )
}

export default DrawerLink
