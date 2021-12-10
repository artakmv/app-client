import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../actions/user'
import { Box, Button, Container, Typography } from '@mui/material'
import Input from '../components/UI/Input'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={() => console.log('handleSubmit')}
          noValidate
          sx={{ mt: 1 }}>
          <Input label="Email Address" value={email} setValue={setEmail} />
          <Input label="Password" type="password" value={password} setValue={setPassword} />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              dispatch(signIn(email, password))
              navigate('/companies')
            }}>
            Sign In
          </Button>
          <Button
            component={Link}
            to="/sign-up"
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
            }}>
            {"Don't have an account? Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default SignIn
