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
      justifyContent="space-between"
      alignItems="center"
      width="100%"  // Asegura que ocupe todo el ancho disponible
      maxW="700px"  // Máximo ancho para todos los elementos
      height="80px"  // Alto fijo para cada tarea
    >
      <Text textDecoration={task.completed ? 'line-through' : 'none'}>
        {task.text}
      </Text>

      <Box display="flex" alignItems="center" gap={2}>
        {/* Ícono de tilde verde */}
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

        {/* Ícono de basurero */}
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
