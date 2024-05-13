import { Container, VStack, Heading, Text, Button, Image, Box, SimpleGrid } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Katana Robotics
        </Heading>
        <Text fontSize="xl">Innovative Exoskeleton Solutions for Enhanced Human Performance</Text>
        <Image src="https://images.unsplash.com/photo-1535378273068-9bb67d5beacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwZXhvc2tlbGV0b258ZW58MHx8fHwxNzE1NjAwNTc4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Exoskeleton" boxSize="300px" objectFit="cover" />
        <Box p={4}>
          <Heading as="h2" size="lg">
            Our Models
          </Heading>
          <SimpleGrid columns={3} spacing={10} pt={5}>
            <VStack>
              <FaRobot size="3em" />
              <Text fontWeight="bold">S Model</Text>
              <Text>Designed for speed and agility, perfect for quick operations.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </VStack>
            <VStack>
              <FaRobot size="3em" />
              <Text fontWeight="bold">M Model</Text>
              <Text>Enhanced strength capabilities, ideal for heavy lifting.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </VStack>
            <VStack>
              <FaRobot size="3em" />
              <Text fontWeight="bold">SM Model</Text>
              <Text>A hybrid model combining speed and strength for versatile applications.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </VStack>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
