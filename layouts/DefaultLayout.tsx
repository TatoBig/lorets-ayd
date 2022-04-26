import { ArrowRightIcon } from '@chakra-ui/icons'
import Drawer from 'components/layout/Drawer'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
  title: string
  action?: {
    link: string
    name: string
  }
  max?: boolean
}

const animation = {
  open: 'w-full',
  close: 'w-0'
}

const DefaultLayout = ({ children, title, action, max = true }: Props) => {
  const [animationState, setAnimationState] = useState<'close' | 'open'>('close')

  useEffect(() => {
    setAnimationState('open')
  }, [])

  return (
    <div className="flex mt-6 mr-6">
      <div className="mr-4">
        <Drawer />
      </div>
      <div className="w-full">
        <div className="font-helvetica bg-indigo-600 w-full h-96 rounded-3xl flex items-center px-20 text-gray-200 shadow-xl">
          <div className="mb-28 flex justify-between w-full">
            <div className="text-7xl">
              {title}
              <div className={animation[animationState] + ' bg-white h-1.5 rounded-xl transition-all delay-300 duration-500'} />
            </div>
            {action &&
              <Link href={action.link} passHref>
                <div className="cursor-pointer bg-white rounded-3xl flex h-12 px-4 text-gray-700 font-helvetica font-bold items-center hover:bg-gray-100 transition-all hover:shadow-2xl">
                  {action.name}
                  <ArrowRightIcon className="ml-4"/>
                </div>
              </Link>
            }
          </div>
        </div>
        <div className={(max ? ' ' : 'w-min ') + ' max-w-[98%] mx-4 -mt-36 bg-white rounded-3xl px-16 py-8 shadow-xl'}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
