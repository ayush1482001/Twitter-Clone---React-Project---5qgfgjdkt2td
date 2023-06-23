import { useState, useEffect } from 'react'
import './App.css'
import Menubar from './components/menu-bar'
import Sidebar from './components/sidebar'
import Maincontent from './components/main-content'
import {SimpleGrid,Box,Grid,GridItem,Flex}from'@chakra-ui/react'






function App() {
 return<>
<Grid templateColumns="3fr 5fr 4fr" className='mainContainer' >
  <GridItem minHeight="200px" className='asidebar' >
    <Flex justifyContent="center" gap="20px"><Menubar /></Flex>
  </GridItem>
  <GridItem minHeight="100vh" borderLeft="1px solid gray" className='mainbox'><Maincontent /></GridItem>
  <GridItem minHeight="100vh" borderLeft="1px solid gray" className='sidebox'><Sidebar /></GridItem>
</Grid>
  </>
}
export default App
