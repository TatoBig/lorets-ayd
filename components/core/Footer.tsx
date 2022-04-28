import LogoChakra from 'components/icons/LogoChakra'
import LogoFirebase from 'components/icons/LogoFirebase'
import LogoNext from 'components/icons/LogoNext'
import LogoReact from 'components/icons/LogoReact'
import LogoRedis from 'components/icons/LogoRedis'
import LogoRedux from 'components/icons/LogoRedux'
import LogoTailwind from 'components/icons/LogoTailwind'
import LogoTypescript from 'components/icons/LogoTypescript'
import LogoUpstash from 'components/icons/LogoUpstash'

const Footer = () => {
  return (
    <div className="w-1/3 bg-gray-200 p-4 rounded-3xl shadow-xl">
      <div className="grid grid-cols-9 gap-4 w-full">
        <div className="group relative">
          <LogoReact />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-4 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl  font-bold">
            React
          </div>
        </div>
        <div className="group relative">
          <LogoRedux />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-4 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Redux
          </div>
        </div>
        <div className="group relative">
          <LogoNext />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-4 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            NextJS
          </div>
        </div>
        <div className="group relative">
          <LogoTypescript />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-10 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Typescript
          </div>
        </div>
        <div className="group relative">
          <LogoRedis />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-4 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Redis
          </div>
        </div>
        <div className="group relative">
          <LogoUpstash />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-6 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Upstash
          </div>
        </div>
        <div className="group relative">
          <LogoFirebase />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-8 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Firebase
          </div>
        </div>
        <div className="group relative">
          <LogoTailwind />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-8 text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Tailwind
          </div>
        </div>
        <div className="group relative">
          <LogoChakra />
          <div className="group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 translate-y-10 opacity-0 scale-0 transition-all absolute bottom-[55px] -left-10 whitespace-nowrap text-xl font-helvetica bg-gray-200 px-4 py-4 rounded-3xl font-bold">
            Chakra-UI
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
