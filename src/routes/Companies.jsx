import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

const Companies = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1, maxWidth: 752, mt: 4 }}>
        <Typography component="h1" variant="h3" textAlign="center">
          My Companies:
        </Typography>
        <Card sx={{ minWidth: 275, mt: 2 }}>
          <CardContent>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <ReadMoreIcon />
                  </IconButton>
                }
                disablePadding>
                <ListItemButton dense>
                  <ListItemIcon>
                    <DeleteIcon edge="start" />
                  </ListItemIcon>
                  <ListItemText id={1} primary={'company 1'} />
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default Companies
