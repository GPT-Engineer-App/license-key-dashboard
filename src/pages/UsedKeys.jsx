import { useState } from "react";
import { Box, Button, Text, VStack, Input, useToast } from "@chakra-ui/react";

const UsedKeys = () => {
  const [usedKeys, setUsedKeys] = useState([]);
  const [currentKey, setCurrentKey] = useState("");
  const toast = useToast();

  const markKeyAsUsed = () => {
    if (currentKey && !usedKeys.includes(currentKey)) {
      setUsedKeys([...usedKeys, currentKey]);
      setCurrentKey("");
      toast({
        title: "Key Marked as Used.",
        description: `The key "${currentKey}" has been marked as used.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid Key.",
        description: "The key is either empty or already marked as used.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input
          placeholder="Enter key to mark as used"
          value={currentKey}
          onChange={(e) => setCurrentKey(e.target.value)}
        />
        <Button onClick={markKeyAsUsed} colorScheme="teal">
          Mark as Used
        </Button>
        {usedKeys.length > 0 && (
          <Box>
            <Text>Used Keys:</Text>
            <VStack spacing={2} align="start">
              {usedKeys.map((key, index) => (
                <Text key={index}>{key}</Text>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default UsedKeys;