import React, { useState, useEffect } from "react";
import { Box, Input, Button, Select, Heading, VStack, HStack, Text } from "@chakra-ui/react";
import fondo from "../assets/fondo.jpg";
import List from "./List";
import DeleteModal from "./Delete";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null); 

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = () => {
    if (task.trim() === "") {
      setError("La tarea no debe estar vacía.");
      return;
    }
    const newTask = { id: Date.now(), text: task, completed: false };
    setTasks([...tasks, newTask]);
    setTask("");
    setError("");
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
    setTaskToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    setIsModalOpen(false);
    setTaskToDelete(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <>
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
        filter="blur(8px)"
      />
      <VStack
        minHeight="100vh"
        justifyContent="flex-start" 
        alignItems="center"
        spacing={6}
        px={6}
        overflow="auto" 
      >
        <Heading
          fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "6xl", xl: "6xl" }}
          color="purple.600"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
          mt={12}
        >
          Lista de Tareas
        </Heading>

        <HStack
          w="100%"
          maxW="4xl"
          spacing={4}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Input
            placeholder="Agregar una nueva tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            flex="1"
            size="lg"
            variant="filled"
            bg="white"
            padding="10px"
            _hover={{
              bg: "lavender",
              borderColor: "purple.400",
              borderWidth: "2px",
            }}
            _focus={{
              bg: "white",
              borderColor: "purple.500",
              boxShadow: "none",
            }}
            focusBorderColor="purple.500"
            _placeholder={{ color: "gray.500" }}
          />
          <Select
            onChange={handleFilterChange}
            flex="1"
            size="lg"
            variant="filled"
            bg="white"
            placeholder="Seleccionar"
            _hover={{
              bg: "lavender",
              borderColor: "purple.400",
              borderWidth: "2px",
            }}
            _focus={{
              bg: "white",
              borderColor: "purple.500",
              boxShadow: "none",
            }}
            focusBorderColor="purple.500"
          >
            <option value="all">Todas</option>
            <option value="completed">Completadas</option>
            <option value="incomplete">Pendientes</option>
          </Select>
        </HStack>
        <Button
          onClick={handleSubmit}
          size="lg"
          bg="purple.500"
          color="white"
          _hover={{ bg: "purple.400" }}
          mt={6}
        >
          Agregar
        </Button>
        {error && (
          <Text fontSize="xl" color="red.500" mt={4}>
            {error}
          </Text>
        )}
        <List
          tasks={filteredTasks}
          onToggleComplete={handleComplete}
          onDelete={handleDelete}
        />
      </VStack>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
}

export default TodoList;
