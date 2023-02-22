import React from 'react'
import { Box, Button, Flex, Heading, HStack, Text, Icon } from '@chakra-ui/react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Midportion() {
  return (

    <Box 
        maxW={"950px"}  
        mt = {"-150px"} 
        mx ={{base: "20px", lg: "auto"}}
        bg = {"white"} 
        borderRadius = {"24px"} 
        overflow = "hidden"
        boxShadow={"0px 20px 25px -5px rgba(0,0,0,0.2), 0px 10px 10px -5px rgba(0,0,0,0.48)"}>

        {/* Start of Box Container */}

        <Flex direction= {{base:"column", md: "column", lg: "row"}}>
            {/* Now the Left Side Box */}

            <Box bg={"#cbb8ec"} p = {"40px"} textAlign ={"center"}>

                <Text fontSize={"24px"} fontWeight = {"bold"}>
                    Premiun Pro 
                </Text>

                <Heading fontSize={"60px"}>
                    $309
                </Heading>

                <Text> Billed Just Once</Text>

                <Button mt={"20px"} w = {"300px"} color = {"white"} bg ={"#805AD5"}>
                    Get Started
                </Button>
            </Box>

            {/* And Now the Right Side Box */}

            <Box pt={"50px"} pl = {"25px"} pr = {"1-px"}>

                <Text mb = {"15px"}>
                    Access these Features when you get your Pricing Package for your Business
                </Text>

                <HStack mb = {"10px"}>
                    <Icon as = {checkMarkIcon} />
                    <Text> International Calling and Messaging API</Text>
                </HStack>

                <HStack mb = {"10px"}>
                    <Icon as = {checkMarkIcon} />
                    <Text> Additional Phone Number</Text>
                </HStack>

                <HStack mb = {"10px"}>
                    <Icon as = {checkMarkIcon} />
                    <Text> Automated Messages via Zapier</Text>
                </HStack>

                <HStack mb = {"10px"}>
                    <Icon as = {checkMarkIcon} />
                    <Text> 24/7 Support and Consulting</Text>
                </HStack>

            </Box> 

        </Flex>
                
    </Box>
  )
}
