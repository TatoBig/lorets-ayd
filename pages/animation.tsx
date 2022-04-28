import { useEffect, useState } from 'react'

const textAnimation = {
  white: {
    develop: 'text-white'
  },
  color: {
    develop: 'text-transparent'
  }
}

const animation = () => {
  const [colorDevelop, setColorDevelop] = useState('white')
  const [colorPreview, setColorPreview] = useState('white')
  const [colorShip, setColorShip] = useState('white')

  useEffect(() => {
    initColors()
  }, [])

  const initColors = async () => {
    while (true) {
      await sleep(1000)
      setColorDevelop(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorDevelop(prevCount => prevCount === 'white' ? 'color' : 'white')
      setColorPreview(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorPreview(prevCount => prevCount === 'white' ? 'color' : 'white')
      setColorShip(prevCount => prevCount === 'white' ? 'color' : 'white')
      await sleep(3000)
      setColorShip(prevCount => prevCount === 'white' ? 'color' : 'white')
    }
  }

  function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col bg-gradient-to-r bg-black">
      <div className={textAnimation[colorDevelop].develop + ' text-[10rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#007CF0] to-[#00DFD8]'}>
        Develop.
      </div>
      <div className={textAnimation[colorPreview].develop + ' text-[10rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#7928CA] to-[#FF0080]'}>
        Preview.
      </div>
      <div className={textAnimation[colorShip].develop + ' text-[10rem] font-bold -mb-8 transition-all duration-1000 bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]'}>
        Ship.
      </div>
    </div>
  )
}

export default animation
