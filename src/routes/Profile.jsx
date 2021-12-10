import React from 'react'
import { useSelector } from 'react-redux'
import {
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import BusinessIcon from '@mui/icons-material/Business'
import DescriptionIcon from '@mui/icons-material/Description'

const Profile = () => {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1, maxWidth: 752, mt: 4 }}>
        <Typography component="h1" variant="h3" textAlign="center">
          Personal info:
        </Typography>
        <Card sx={{ minWidth: 275, mt: 2 }}>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={user.firstName + ' ' + user.lastName} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AlternateEmailIcon />
                </ListItemIcon>
                <ListItemText primary={'Email: ' + user.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText primary={'Phone number: ' + user.phoneNumber} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InsertEmoticonIcon />
                </ListItemIcon>
                <ListItemText primary={'Nickname: ' + user.nickname} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={'Description: ' + user.description} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary={'Position: ' + user.position} />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Profile
