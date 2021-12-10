import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../actions/company'
import { Box, Button, Container, Typography } from '@mui/material'
import Input from '../components/UI/Input'

const CreateCompany = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [service, setService] = useState('')
  const [employeesNumber, setEmployeesNumber] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')

  const dispatch = useDispatch()
  const userId = useSelector((state) => state.user.currentUser.id)

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
          Creat Company
        </Typography>
        <Box
          component="form"
          onSubmit={() => console.log('handleSubmit')}
          noValidate
          sx={{ mt: 1 }}>
          <Input label="Company Name" value={name} setValue={setName} />
          <Input label="Address" value={address} setValue={setAddress} />
          <Input label="Service" value={service} setValue={setService} />
          <Input
            label="Employees Number"
            value={employeesNumber}
            setValue={setEmployeesNumber}
          />
          <Input
            label="Description"
            value={description}
            setValue={setDescription}
          />
          <Input label="Type" value={type} setValue={setType} />

          <Button
            fullWidth
            color="success"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() =>
              dispatch(
                create(
                  name,
                  address,
                  service,
                  employeesNumber,
                  description,
                  type,
                  userId
                )
              )
            }>
            Create Company
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default CreateCompany
