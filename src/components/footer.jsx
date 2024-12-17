import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
      as="footer"
      bg="purple.100" 
      py={4}
      textAlign="center"
      color="purple.600" 
      boxShadow="md"
      mt="auto"
    >
      <Text fontSize="md">© 2024 - Todo List. Todos los derechos reservados.</Text>
    </Box>
  );
}

export default Footer;
