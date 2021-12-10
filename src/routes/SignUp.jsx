import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from '../actions/user'
import { Box, Button, Container, Typography } from '@mui/material'
import Input from '../components/UI/Input'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')
  const [description, setDescription] = useState('')
  const [position, setPosition] = useState('')

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          mb: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={() => console.log('handleSubmit')}
          noValidate
          sx={{ mt: 1 }}>
          <Input label="Email Address" value={email} setValue={setEmail} />
          <Input label="Password" type="password" value={password} setValue={setPassword} />
          <Input
            label="Phone number"
            value={phoneNumber}
            setValue={setPhoneNumber}
          />
          <Input label="First name" value={firstName} setValue={setFirstName} />
          <Input label="Last name" value={lastName} setValue={setLastName} />
          <Input label="Nickname" value={nickname} setValue={setNickname} />
          <Input
            label="Description"
            value={description}
            setValue={setDescription}
          />
          <Input label="Position" value={position} setValue={setPosition} />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() =>
              signUp(
                email,
                password,
                phoneNumber,
                firstName,
                lastName,
                nickname,
                description,
                position
              )
            }>
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/sign-in"
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: 'center',
            }}>
            Already a member? Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default SignUp
