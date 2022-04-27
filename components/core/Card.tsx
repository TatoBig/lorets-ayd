import { ReactNode } from 'react'

const Card = ({ children, max = false }: { children: ReactNode, max?: boolean }) => {
  return (
    <div className={(max ? ' ' : 'w-min ') + ' max-w-[98%] mx-4 h-min  bg-white rounded-3xl px-16 py-8 shadow-xl'}>
      {children}
    </div>
  )
}

export default Card
