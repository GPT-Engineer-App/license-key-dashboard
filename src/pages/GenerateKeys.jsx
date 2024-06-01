import { useState } from "react";
import { Box, Button, Text, VStack, useToast } from "@chakra-ui/react";

const GenerateKeys = () => {
  const [keys, setKeys] = useState([]);
  const toast = useToast();

  const generateKeys = () => {
    const newKeys = Array.from({ length: 100 }, () =>
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
    setKeys(newKeys);
    toast({
      title: "Keys Generated.",
      description: "100 new license keys have been generated.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Button onClick={generateKeys} colorScheme="teal">
          Generate 100 Keys
        </Button>
        {keys.length > 0 && (
          <Box>
            <Text>Generated Keys:</Text>
            <VStack spacing={2} align="start">
              {keys.map((key, index) => (
                <Text key={index}>{key}</Text>
              ))}
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default GenerateKeys;