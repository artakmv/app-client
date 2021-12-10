import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export const signUp = async (
  email,
  password,
  phoneNumber,
  firstName,
  lastName,
  nickname,
  description,
  position
) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/sign-up', {
      email,
      password,
      phoneNumber,
      firstName,
      lastName,
      nickname,
      description,
      position,
    })
  } catch (e) {
    console.log(e.response.data.message)
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/sign-in', {
        email,
        password,
      })

      dispatch(setUser(response.data.user))
      console.log(response.data)
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
}

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/auth/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })

      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      console.log(e.response.data.message)
      localStorage.removeItem('token')
    }
  }
}
