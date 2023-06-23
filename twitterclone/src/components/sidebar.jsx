import'./sidebar.css';
import{useState}from "react";
import { HStack,Container,Avatar,Heading,Flex,Input,Box,Text,Button,InputGroup,InputLeftElement} from '@chakra-ui/react';
import{PhoneIcon,SearchIcon}from"@chakra-ui/icons"
import { useAuth0 } from "@auth0/auth0-react";



const Sidebar=()=>{
  const {isAuthenticated,user} = useAuth0();

  const trending=[
    {name:"Ashes23",
  category:"Sports",
tweetNo:3076},
    {name:"MafiaSibbuBhai",
  category:"News",
tweetNo:7079},
    {name:"JaiShriRam",
  category:"religious",
tweetNo:100056},
    {name:"KhalistanCollaps",
  category:"News",
tweetNo:1056},
    {name:"BuntyGangster",
  category:"Entertainment",
tweetNo:6056},
    {name:"PuneetSuperstar",
  category:"Entertainment",
tweetNo:9022},
    {name:"Ashes23",
  category:"Sports",
tweetNo:3076},
    {name:"MafiaSibbuBhai",
  category:"News",
tweetNo:7079},
    {name:"JaiShriRam",
  category:"religious",
tweetNo:100056},
    {name:"KhalistanCollaps",
  category:"News",
tweetNo:1056},
    {name:"BuntyGangster",
  category:"Entertainment",
tweetNo:6056},
    {name:"PuneetSuperstar",
  category:"Entertainment",
tweetNo:9022},
    {name:"Ashes23",
  category:"Sports",
tweetNo:3076},
    {name:"MafiaSibbuBhai",
  category:"News",
tweetNo:7079},
    {name:"JaiShriRam",
  category:"religious",
tweetNo:100056},
    {name:"KhalistanCollaps",
  category:"News",
tweetNo:1056},
    {name:"BuntyGangster",
  category:"Entertainment",
tweetNo:6056},
    {name:"PuneetSuperstar",
  category:"Entertainment",
tweetNo:9022},

]
const[showMore,setShowMore] =useState(false);

    return<>
    <Container>
    <Flex flexDirection="column"h="100vh"  gap="10px" alignItems="center">
      {/* { isAuthenticated ?<Box className='login'><HStack>
        <Text> {user.name}</Text>
        <Avatar></Avatar>
        </HStack></Box> : null} */}
    <InputGroup my="2vh">
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.600'/>
    </InputLeftElement>
    <Input variant='filled' placeholder="search twitter..."  borderRadius="26px" />
  </InputGroup>
    <Box h="120px" width="100%" bg="gray.200" borderRadius="15px" >
        <Heading fontSize="18px" ml="10px" my="1vh">Get verified</Heading>
        <Text fontSize="14px" ml="10px">Subscribe to unlick new  features</Text>
        <Button colorScheme='messenger' borderRadius="20px" m="1vh">Get verified</Button>
    </Box>
    <Box className='trending' overflowY={showMore ? "scroll" : "hidden"} >
      <div className="headingDiv"><Heading className='whats_happ'>What's happening</Heading></div>
      <Heading className='whats_happ'>What's happening</Heading>
      {trending.map((ele)=>{
        return<>
        <Box  >
          <HStack >
            <Box className='trendingBox' >
              <p>{ele.category}-Trending</p>
              <h4 className='head'>#{ele.name}</h4>
              <p>{ele.tweetNo} Tweets</p>
            </Box>
          </HStack>
        </Box>
        
        </>
      })
      }
      <div className="showMore"  onClick={()=>{setShowMore(!showMore)}}><Button  className='showMore'> {!showMore ? "Show more" : "Show less"}</Button></div>
      </Box>  
    
    
    </Flex>
    </Container>
    </>
}
export default Sidebar;