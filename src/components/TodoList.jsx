import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Select, Flex, Stack, Heading } from '@chakra-ui/react';
import fondo from '../assets/fondo.jpg'; // Imagen de fondo
import List from './List'; // Importamos List, que contiene el renderizado de las tareas

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Guardar tareas en localStorage cada vez que se actualicen
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = () => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTask(''); // Limpiar el input
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <>
      {/* Fondo borroso */}
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
        backgroundImage={`url(${fondo})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        filter="blur(8px)" // Aplica el desenfoque
      />

      {/* Contenedor de tareas */}
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        p={6}
        
      >
        <Box textAlign="center" mt={12}>
          <Heading as="h1" size="2xl" color="purple.600" mb={10}>
            Lista de Tareas
          </Heading>

          <Stack spacing={8} align="center" justify="center" height="100%" mb={8}>
            <Flex direction={{ base: 'column', md: 'row' }} gap={4} justify="center" align="center">
              <Input
                placeholder="Agregar una nueva tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                bg="white"
                width="400px"
                height="50px"
              />
              <Select
                onChange={handleFilterChange}
                bg="white"
                width="400px"
                height="50px"
                value={filter}
              >
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="incomplete">Incompletas</option>
              </Select>
            </Flex>

            <Box width="100%" display="flex" justifyContent="center" mt={4}>
              <Button
                colorScheme="purple"
                onClick={handleSubmit}
                width="120px"
                height="50px"
              >
                Enviar
              </Button>
            </Box>
          </Stack>

          <Box width="100%" display="flex" justifyContent="center" mt={8}>
            <List
              tasks={filteredTasks}
              onToggleComplete={handleComplete}
              onDelete={handleDelete}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TodoList;

