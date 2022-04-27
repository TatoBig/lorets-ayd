import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './login'

export default configureStore({
  reducer: {
    login: loginReducer
  }
})
