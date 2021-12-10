import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../reducers/userReducer'
import AddIcon from '@mui/icons-material/Add'
import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { AccountCircle, Logout } from '@mui/icons-material'

const Header = () => {
  const isAuth = useSelector((state) => state.user.isAuth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          App
        </Typography>
        {!isAuth ? (
          <div>
            <Button
              component={Link}
              to="/sign-in"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}>
              Sign in
            </Button>
            <Button
              component={Link}
              to="/sign-up"
              variant="outlined"
              sx={{ my: 1, mx: 1.5 }}>
              Sign up
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <ButtonGroup variant="contained" sx={{ mr: 2 }}>
                <Button component={Link} to={'/companies'}>
                  Companies
                </Button>
                <IconButton
                  component={Link}
                  to={'/create-company'}
                  color="primary">
                  <AddIcon />
                </IconButton>
              </ButtonGroup>
              <IconButton
                size="large"
                aria-label="account of current user"
                color="inherit"
                onClick={() => {
                  navigate('/profile')
                }}>
                <AccountCircle />
              </IconButton>
              <IconButton
                color="error"
                variant="outlined"
                sx={{ my: 1, mx: 1.5 }}
                onClick={() => {
                  dispatch(logout())
                  navigate('/sign-in')
                }}>
                <Logout />
              </IconButton>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
