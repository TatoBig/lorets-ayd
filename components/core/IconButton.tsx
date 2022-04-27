import { ReactNode } from 'react'

type Props = {
  item: {
    title: string
    action: () => void
    icon?: ReactNode
  }
}

const IconButton = ({
  item
}: Props) => {
  return (
    <div onClick={() => item.action()} className="w-min whitespace-nowrap cursor-pointer bg-gray-100 shadow-xl rounded-3xl flex h-12 px-4 text-gray-700 font-helvetica font-bold items-center hover:bg-gray-300 transition-all hover:shadow-xl">
      {item.title}
      <div className="ml-4">
        {item.icon}
      </div>
    </div>
  )
}

export default IconButton
