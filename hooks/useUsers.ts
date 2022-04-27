import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import firebase from 'services/firebase'

const url = '/api/users'

const useUsers = () => {
  const newUser = async (data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const { body } = await response.json()

    if (body === 'success') {
      console.log(firebase)
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, data.email, data.password)
    }
    return body
  }

  return {
    newUser
  }
}

export default useUsers
