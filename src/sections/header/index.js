import React from 'react';
import AppBar from '@mui/material/AppBar'
import { styled, Stack, Button } from '@mui/material/';
import Avatar from "@material-ui/core/Avatar";
import SearchBarComp from '../../components/search-bar/index.js';
import ImageTrust from '../../images/SpotifyIcon.png';

const AppBarStyled = styled(AppBar)(({ theme }) =>({
  backgroundColor: theme.palette.background.paper,
}))

export default function NavBar() {
  return (
    <div>
      <AppBarStyled>
        <Stack spacing={1} direction="row">
          <Button startIcon={<Avatar src={ImageTrust}/> }>
            Spotify
          </Button>
          <SearchBarComp />
        </Stack>
      </AppBarStyled>
      
    </div>
  )
}
