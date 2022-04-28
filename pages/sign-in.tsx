import { Button, Input, useToast } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { loginRedux } from 'store/login'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import firebase from 'services/firebase'
import Footer from 'components/core/Footer'

const animation = {
  open: 'w-full',
  close: 'w-0'
}

const SignIn: NextPage = () => {
  const { register, handleSubmit } = useForm()
  const [animationState, setAnimationState] = useState<'close' | 'open'>('close')
  const dispatch = useDispatch()
  const {
    logged
  } = useSelector(state => state.login)
  const router = useRouter()
  const toast = useToast()

  useEffect(() => {
    setAnimationState('open')
  }, [])

  useEffect(() => {
    if (logged) {
      router.push('/')
    }
  }, [logged])

  const onSubmit = (data) => {
    console.log(firebase)
    const auth = getAuth()
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        dispatch(loginRedux({
          status: true,
          username: user.email,
          id: user.uid
        }))
        // ...
      })
      .catch(() => {
        toast({
          duration: 2000,
          status: 'error',
          title: 'Correo o contraseña incorrecta'
        })
      })
  }
  return (
    <div className="bg-gradient-to-b from-[#9FD4FE] to-[#D0CEFF] w-screen h-screen flex items-center justify-center flex-col">
      <div className="bg-gray-200 w-1/4 h-auto p-8 rounded-3xl shadow-xl items-center justify-center flex flex-col">
        <div className="flex-wrap">
          <div className="font-helvetica text-6xl">
            Sistema Lorets
          </div>
          <div className={animation[animationState] + ' bg-black h-[5px] rounded-xl transition-all delay-300 duration-500'} />

        </div>
        <div className="flex items-center flex-col w-full">
          <span className="text-xl mt-8 mb-6">
            Ingreso
          </span>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')} variant="filled" className="mb-2" placeholder="Correo electrónico" size="lg" />
            <Input {...register('password')} variant="filled" className="mb-6" placeholder="Contraseña" size="lg" type="password" />
            <Button
              width="full"
              colorScheme="blue"
              type="submit"
            >
              Ingresar
            </Button>
          </form>
        </div>

      </div>
      <div className="mt-12 w-full flex justify-center">
        <Footer />

      </div>
    </div>
  )
}

export default SignIn
