"use client"
import { Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Midportion from "./Midportion";

export default function Home() {
  return (
    <ChakraProvider> 
      
      < Header />
      <Midportion/>
      
    </ChakraProvider>
  );
}
