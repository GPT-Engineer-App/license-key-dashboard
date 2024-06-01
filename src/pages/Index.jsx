import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to License Manager</Heading>
        <Text fontSize="2xl">Manage your software license keys efficiently.</Text>
      </VStack>
    </Container>
  );
};

export default Index;