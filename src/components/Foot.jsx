import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      width="100%"  
      textAlign="center"
      p={6}  
      bg="purple.600"
      color="white"  
      position="relative"  
      mt="auto"  
      boxShadow="md" 
    >
      {/* Texto */}
      <Text fontSize="lg" mb={2} fontStyle="italic">Hecho con 💜 por Romina</Text>
      
      {/* Texto de copyright */}
      <Text fontSize="md">© 2024 - Todo List. Todos los derechos reservados.</Text>
    </Box>
  );
}
export default Footer;
