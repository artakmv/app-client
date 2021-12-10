import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'
import Header from './components/Header'
import { auth } from './actions/user'
import Companies from './routes/Companies'
import Profile from './routes/Profile'
import CreateCompany from './routes/CreateCompany'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          {!isAuth ? (
            <Routes>
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="/" element={<Navigate to="/sign-in" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/companies" element={<Companies />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-company" element={<CreateCompany />} />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
