"use client"
import { Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";
import Midportion from "./Midportion";
import Footer from "./Footer";

export default function Home() {
  return (
    <ChakraProvider> 
      
      < Header />
      <Midportion/>
      <Footer />
      
    </ChakraProvider>
  );
}
