import './main-content.css';
import { useState } from "react"
import { Heading, Button, Avatar, HStack, Input } from '@chakra-ui/react'
import pic1 from '../assets/website.jpg'
import pic2 from '../assets/images.jpg'
import pic3 from '../assets/DALLEcopy.webp'
import pic4 from '../assets/download.jpg'
import { useAuth0 } from "@auth0/auth0-react";
// import pic5 from '../assets/download.jpg'
// import pic6 from '../assets/images.jpg'
import { Card, CardHeader, Flex, Box, IconButton, CardBody, CardFooter, Image, Text } from '@chakra-ui/react'
import { PhoneIcon, ChatIcon } from '@chakra-ui/icons';
import { FcLikePlaceholder, FcShare, FcLike } from "react-icons/fc";
import { BsThreeDotsVertical,BsSendFill } from "react-icons/bs";



function Maincontent() {
  const { isAuthenticated, user } = useAuth0();
  const[val,setVal]= useState("");
  const[tweetVal,setTweetVal]= useState({
    id:-2,
    src: ``,
    name: isAuthenticated ? `${user.name}`:" " ,
    des: "",
    likes: 0,
    likeSt:false,
    commentSt:false,
    comments: []});

  const [tweets, setTweets] = useState([{
    id:1,
    src: `${pic4}`,
    name: "Chaman",
    des: "dhcbh dcbhdsbch dcbhdcb cdsbchdbhdc chdbcbdh dshcbhcb",
    likes: 56,
    likeSt:false,
    commentSt:false,
    comments: ["nice", "are khatarnak", "lallantop"]
  },
  { id:2,
    src: `${pic2}`,
    name: "Ankur giri",
    des: "cahvshcs ahvchavshvdah jacjdsbb absnbsnabasn sabdbdn",
    likes: 521,
    likeSt:false,
    commentSt:false,
    comments: ["great", "nice", "lallantop"]
  },
  { id:3,
    src: `${pic3}`,
    name: "Vivek",
    des: "basdbhdbhd dahsbhsbshbs hsbhsbhsha habhsbhsbs ashvshv",
    likes: 754,
    likeSt:false,
    comments: ["lallantop"],
    commentSt:false,
  },
  { id:4,
    src: `${pic1}`,
    name: "shubham",
    des: "jbsjadb sdbajdjss bjsbjasbja abjasbjs asjbjsj",
    likes: 123,
    likeSt:false,
    comments: ["loved it 😍","great poster","yeah i am also a pet lover 🥰 🥰 🥰"],
    commentSt:false,
  }])
  const handleLike = (tweetId) => {
    isAuthenticated &&
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === tweetId && !tweet.likeSt ? { ...tweet, likes: tweet.likes + 1 ,likeSt:true} : tweet &&
        tweet.id === tweetId && tweet.likeSt ? { ...tweet, likes: tweet.likes - 1 ,likeSt:false} : tweet
      )
    )
  }
  const handleComment=(tweetId)=>{
   isAuthenticated && setTweets((prev)=>
    prev.map((tweet)=>
    tweet.id === tweetId ? { ...tweet, commentSt: !tweet.commentSt} : tweet
    )) 
  }
  const addComment=(tweetId)=>{
    const arr=[]; 
    isAuthenticated &&
    setTweets((prev)=>
    prev.map((tweet)=>
     
    tweet.id === tweetId ? { ...tweet, comments:[...tweet.comments,val]} : tweet 
    
    )) 
    setVal("");

  }
  const handleInput=(e)=>{
    isAuthenticated &&
    setVal(e.target.value);
  }
  const handleTweetVal=(e)=>{
    isAuthenticated &&
    setTweetVal({...tweetVal, id :tweets.length+1,des:e.target.value});
    
  }
  const addTweet=()=>{
    const arr=[...tweets,tweetVal]; 
    isAuthenticated &&
    setTweets((prev)=>
    arr
   
    ) 
    setTweetVal({
      id:-2,
    src: ``,
    name: isAuthenticated ? `${user.name}`:" " ,
    des: "",
    likes: 0,
    likeSt:false,
    commentSt:false,
    comments: []
    })

  };

  return <>
    <div className="header"><Heading py="2vh" pl="1vw">Home </Heading>
      <hr /></div>
    <div className="input">
      <div className="lay">
        <select name="visibility" id="vis">
          <option value="everyone" >Everyone</option>
          <option value="circle" >Twitter circle</option>
          <option value="close" >Close friends</option>
        </select>
        <HStack gap="2vw">

          <Avatar src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"></Avatar>
          <Input value={tweetVal.des} onChange={handleTweetVal} variant='flushed' placeholder='What is happning?!' />
        </HStack>
        {isAuthenticated ? <Button onClick={addTweet}>Tweet</Button> : null}
      </div>
    </div>
    <div className="space"></div>
    <div className="container">
      {tweets.slice(0).reverse().map((ele) => {
        return <><Card maxW='lg' bg="gray.100" className='card'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                <Box>
                  <Heading size='sm'>{ele.name}</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant='ghost'
                colorScheme='gray'
                aria-label='See menu'
                icon={<BsThreeDotsVertical />}

              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              {ele.des}
            </Text>
          </CardBody>
          {ele.src ? <Image
            objectFit='cover'
            src={ele.src}
            alt='Chakra UI'
          /> : null}

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
           
            <Button onClick={() => handleLike(ele.id)} flex='1' variant="ghost" leftIcon={ele.likeSt ? <FcLike/>:<FcLikePlaceholder />} >
              {ele.likes} Like
            </Button>
            <Button onClick={()=>handleComment(ele.id)} flex='1' variant='ghost' leftIcon={<ChatIcon />} >
              {ele.comments.length} Comment
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<FcShare />}>
              Share
            </Button>
            {ele.commentSt ? <Box className='commentBox'>
         
            <HStack p="1vh">
           <Input  variant='flushed' value={val} onChange={handleInput}placeholder='Start typing comments...' /> 
            <Button flex='1' type='submit' onClick={()=>addComment(ele.id)}   variant="ghost"  leftIcon={<BsSendFill />} />
            </HStack>
           
            
             {ele.comments.slice(0).reverse().map((e)=>
             <>
            <HStack><Avatar w="1.5vw" h="1.5vw"></Avatar>
             <Text>{e}</Text>
             <Button flex='1' variant="ghost"  leftIcon={<FcLike/>} />
             </HStack>
             </>
             )}

            </Box> :null}
          </CardFooter>
        </Card>
        </>
      }
      )};

    </div>

  </>
}
export default Maincontent;