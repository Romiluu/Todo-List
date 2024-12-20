import React from 'react';
import { Box, Text, IconButton } from '@chakra-ui/react';
import { CheckIcon, DeleteIcon } from '@chakra-ui/icons';

const Item = ({ task, onToggleComplete, onDelete }) => {
  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      mb={4}
      bg="white"
      display="flex"
      flexDirection="row" 
      justifyContent="space-between"
      alignItems="flex-start" 
      width="100%"           
      maxW="700px"          
      height="auto"  
    >
      {/* Texto de la tarea */}
      <Text
        textDecoration={task.completed ? 'line-through' : 'none'}
        fontWeight={task.completed ? "normal" : "bold"} 
        color={task.completed ? "gray.500" : "black"} 
        wordBreak="break-word" 
        flex="1"          
        mr={4}        
      >
        {task.text}
      </Text>

      {/* Botones */}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Botón para completar */}
        <IconButton
          icon={<CheckIcon />}
          colorScheme={task.completed ? 'green' : 'gray'}
          onClick={() => onToggleComplete(task.id)}
          aria-label="Marcar tarea como completada"
          variant="solid"
          size="sm"
          bg={task.completed ? 'green.500' : 'gray.200'}
          color="white"
          _hover={{ bg: 'green.600' }}
          _active={{ bg: 'green.700' }}
          borderRadius="md"
        />

        {/* Botón para eliminar */}
        <IconButton
          icon={<DeleteIcon />}
          colorScheme="red"
          onClick={() => onDelete(task.id)}
          aria-label="Eliminar tarea"
          variant="solid"
          size="sm"
          bg="red.500"
          color="white"
          _hover={{ bg: 'red.600' }}
          _active={{ bg: 'red.700' }}
          borderRadius="md"
        />
      </Box>
    </Box>
  );
};

export default Item;
