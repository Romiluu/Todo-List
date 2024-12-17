import React, { useState } from 'react';
import { Box, Input, Button, Select, Flex, Stack, Heading, Text } from '@chakra-ui/react';
import fondo from '../assets/fondo.jpg'; // Importar la imagen de fondo

function TodoList({ addTask, filterTasks }) {
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSubmit = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterTasks(e.target.value);
  };

  return (
    <>
      {/* Imagen de fondo borrosa */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        backgroundImage={`url(${fondo})`} // Fondo de la imagen
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        filter="blur(8px)" // Aplica el desenfoque a la imagen
      />

      {/* Contenedor principal con el formulario */}
      <Box
        minHeight="100vh"  // Asegura que ocupe al menos toda la altura de la pantalla
        display="flex"
        flexDirection="column"
        justifyContent="space-between"  // Empuja el footer hacia abajo
        alignItems="center"
        p={6}
      >
        {/* Título arriba del formulario */}
        <Box textAlign="center" mt={12}>
          <Heading as="h1" size="2xl" color="purple.600" mb={10}>
            Lista de Tareas
          </Heading>

          {/* Contenedor principal con el formulario */}
          <Stack spacing={8} align="center" justify="center" height="100%">
            {/* Contenedor para Input y Select alineados */}
            <Flex direction={{ base: 'column', md: 'row' }} gap={4} justify="center" align="center">
              <Input
                placeholder="Agregar una nueva tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                bg="white"
                width="400px" /* Input más largo */
                height="50px" /* Input más alto */
                _hover={{ borderColor: 'purple.300' }} /* Hover en borde */
                _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 2px purple.300' }} /* Focus */
              />
              <Select
                onChange={handleFilterChange}
                bg="white"
                width="400px" /* Mismo ancho que el Input */
                height="50px" /* Más alto */
                value={filter}
                _hover={{ borderColor: 'purple.300' }} /* Hover en borde */
                _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 2px purple.300' }} /* Focus */
              >
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="incomplete">Incompletas</option>
              </Select>
            </Flex>

            {/* Botón centrado debajo del Input y Select */}
            <Box width="100%" display="flex" justifyContent="center" mt={4}>
              <Button
                colorScheme="purple"
                onClick={handleSubmit}
                width="120px" /* Botón más largo */
                height="50px" /* Botón más alto */
                _hover={{ bg: 'purple.300', color: 'white' }} /* Hover */
                _active={{ bg: 'purple.400', color: 'white' }} /* Active (click) */
              >
                Enviar
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default TodoList;
