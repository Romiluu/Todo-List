import { Text, VStack } from "@chakra-ui/react";
import Item from "./Item";

const List = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <VStack
      w="100%"
      maxW={{ base: '80%', md: '600px' }}
      spacing={4}
      align="center"
      mb="50px"
      height="auto" 
    >
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Item
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      ) : (
        <Text
          fontSize="xl"
          color="purple.600"
          backgroundColor="purple.100"
          p={3}
          mt="25px"
          borderRadius="8px"
          fontWeight="semibold"
        >
          No hay tareas
        </Text>
      )}
    </VStack>
  );
};

export default List;
    