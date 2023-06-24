import { useState, useEffect } from 'react'
import './App.css'
import WebFont from 'webfontloader';
import Menubar from './components/menu-bar'
import Sidebar from './components/sidebar'
import logo from "./assets/twitterlogo.png"
import Maincontent from './components/main-content'
import {Box,Grid,GridItem,Flex,Heading, HStack}from'@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";






function App() {
  const { loginWithRedirect,logout,isAuthenticated} = useAuth0();
 return<>
            {isAuthenticated ? (
              <Grid templateColumns="3fr 5fr 4fr" className='mainContainer' >
              <GridItem minHeight="200px" className='asidebar' >
                <Flex justifyContent="center" gap="20px"><Menubar /></Flex>
              </GridItem>
              <GridItem minHeight="100vh" borderLeft="1px solid gray" className='mainbox'><Maincontent /></GridItem>
              <GridItem minHeight="100vh" borderLeft="1px solid gray" className='sidebox'><Sidebar /></GridItem>
            </Grid>
           ): (
    <Box className='log' > 
    <HStack>
      {/* <img src={logo} alt="logo" /> */}
      <img src="https://img.icons8.com/?size=512&id=5MQ0gPAYYx7a&format=png" alt="logo" />
      <Heading > Twitter clone </Heading>
    </HStack>
    <p>just share your throughts with world...</p>
      <button className='but' onClick={() => loginWithRedirect()}>Log In</button>
    </Box>
    
    )
            }

  </>
}
export default App
