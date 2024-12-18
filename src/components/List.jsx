import { Text, VStack } from "@chakra-ui/react";
import Item from "./Item";

const List = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <VStack
      w="100%"
      maxW="700px"
      spacing={4}
      align="center"
      mb="50px"
      height="auto"  // Puedes definir el alto si lo prefieres fijo
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
    