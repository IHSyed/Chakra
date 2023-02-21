import React from 'react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

export default function Midportion() {
  return (

    <Box>
        {/* Start of Box Container */}

        <Flex>
            {/* Now the Left Side Box */}

            <Box bg={ "#cbb8ec"} p = {"40px"} textAlign ={"center"}>

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

            
        </Flex>
        
        Midportion
        
    </Box>
  )
}
