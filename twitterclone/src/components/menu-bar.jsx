import './menu-bar.css';
import { useState } from "react"
import logo from '../assets/twitterlogo.png'
import pic from "../assets/website.jpg"
import { useAuth0 } from "@auth0/auth0-react";
import {Input,Avatar,HStack,Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
// import {ModalCloseButton,ModalBody,ModalFooter,Modal,ModalOverlay,ModalContent,ModalHeader} from '@chakra-ui/react'
const Menubar = () => {

    // const[status,setStatus]=useState(false)
    const { loginWithRedirect,logout,isAuthenticated} = useAuth0();
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const handleTweetVal = (e) => {
    //     isAuthenticated &&
    //       setTweetVal({ ...tweetVal, src: cam.value, id: tweets.length + 1, des: e.target.value });
    //   }
    //   const addTweet = () => {
    //     setTweetVal({ ...tweetVal, src: cam.value });
    //     const arr = [...tweets, tweetVal];
    //     isAuthenticated &&
    //       setTweets((prev) =>
    //         arr
    //       )
    //     console.log("cam.val", cam.value);
    //     console.log("tweetval", tweetVal);
    //     setTweetVal({
    //       id: -2,
    //       src: "",
    //       name: isAuthenticated ? `${user.name}` : " ",
    //       des: "",
    //       likes: 0,
    //       likeSt: false,
    //       commentSt: false,
    //       comments: []
    //     })
    //     setcam({ st: false, value: "" });
    
    //   };
    return <>

        <ul>
            <li className='bird'> <h1><img src={logo} alt="logo" /></h1></li>
            <li><span className="material-symbols-outlined">home</span>
                <span className='menu'>Home</span> </li>
            <li><span className="material-symbols-outlined">search</span>
                <span className='menu'>Explore</span></li>
            <li><span className="material-symbols-outlined">notifications</span>
                <span className='menu'>Notification</span></li>
            <li><span className="material-symbols-outlined">mail</span>
                <span className='menu'>Message</span></li>
            <li><span className="material-symbols-outlined">contract</span>
                <span className='menu'>List</span></li>
            <li><span className="material-symbols-outlined">bookmarks</span>
                <span className='menu'>Bookmarks</span></li>
            <li><span className="material-symbols-outlined">verified</span>
                <span className='menu'>Varified</span></li>
            <li><span className="material-symbols-outlined">account_circle</span>
                <span className='menu'>Profile</span></li>
            <li><span className="material-symbols-outlined">more_horiz</span>
                <span className='menu'>More</span></li>
        
           {isAuthenticated ?  <Button className='button' colorScheme='messenger' onClick={onOpen}>Tweet</Button> : null}
            {isAuthenticated ? (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out
    </button>) : (<button onClick={() => loginWithRedirect()}>Log In</button>)

            }
            
            
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><select name="" id="">
                        <option value="">everyone</option>
                        <option value="">twitter circle</option>
                        <option value="">close friends</option>
                        </select></ModalHeader>
                        <HStack>
                            <Avatar marginLeft="1vw" src={pic}></Avatar>
                            <Input variant='flushed' placeholder='What is happening ?!' />
                        </HStack>
                    <ModalCloseButton />
                    <ModalFooter>
                        <Button variant='ghost'  mr={3} onClick={onClose}>
                            Back
                        </Button>
                        <Button colorScheme='blue' borderRadius="20px" >Tweet</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ul>
    </>
}

export default Menubar;
