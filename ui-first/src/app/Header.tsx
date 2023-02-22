import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box textAlign={{base: "left", md: "left", lg :"center"}} bgColor={"#ee82ee"} pt= {"90px"} pb = {"250px"} color = {"white"} pl = {"10px"}>

      <Heading>Simple Pricing for your Business Needs</Heading>
      <Text pt = {"10px"}> Plans that are Craefully crafted to suit your Business</Text>
      <h1> A Project by Iqbal Hussain Syed</h1>
    </Box>
  )
}
