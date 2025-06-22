"use client";

import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Badge,
  Avatar,
  Container,
} from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="7xl" px={4}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          bg="white"
          borderRadius="lg"
          shadow="sm"
          overflow="hidden"
          gap={8}
          align="stretch"
          p={4}
          mb="40px"
        >
          {/* Image Section */}
          <Box flex={1} position="relative">
            <Image
              src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3?q=80&w=800&auto=format&fit=crop"
              alt="Featured article image"
              w="full"
              h={{ base: "300px", lg: "full" }}
              objectFit="cover"
              loading="lazy"
              rounded={"lg"}
            />
          </Box>

          {/* Content Section */}
          <Box flex={1} p={{ base: 6, md: 8, lg: 12 }}>
            <Stack gap={6} h="full" justify="space-between">
              <Box>
                {/* Category Badge */}
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="md"
                  fontWeight={"bold"}
                  mb={4}
                >
                  Lifestyle
                </Badge>

                {/* Title */}
                <Heading
                  as="h1"
                  size={{ base: "xl", md: "2xl" }}
                  fontWeight="bold"
                  mb={4}
                  lineHeight="shorter"
                  color="gray.900"
                >
                  Begin here to obtain a brief summary encompassing all the
                  essential
                </Heading>

                {/* Description */}
                <Text
                  color="gray.600"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight="relaxed"
                  mb={6}
                >
                  This comprehensive post serves as your cheat-sheet to swiftly
                  familiarize yourself with Ghost. Packed with crucial insights
                  and practical tips to get you started.
                </Text>
              </Box>

              {/* Author Info */}
              <Flex align="center" gap={3}>
                <Avatar.Root size="sm">
                  <Avatar.Fallback>AD</Avatar.Fallback>
                  <Avatar.Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Andira Devid"
                  />
                </Avatar.Root>
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="gray.700"
                    lineHeight="none"
                  >
                    Andira Devid
                  </Text>
                  <Text fontSize="xs" color="gray.500" lineHeight="none">
                    Sep 10, 2025
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Stack>

        <Flex gap={8}>
          <Flex
            direction="row"
            bg={"white"}
            shadow="sm"
            gap={8}
            borderRadius="lg"
            p={"8px"}
          >
            <Box flex={"1"}>
              <Image
                src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3?q=80&w=800&auto=format&fit=crop"
                alt="Featured article image"
                w="full"
                h="200px"
                objectFit="cover"
                loading="lazy"
                rounded={"lg"}
                aspectRatio={"square"}
              />
            </Box>
            <Box flex={"1"}>
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight={"bold"}
                my={4}
                color={"blue.400"}
              >
                Technology
              </Badge>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                14 Innovative Architectural Design to Create a Vast Interior
                Space
              </Text>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.700"
                  lineHeight="none"
                >
                  Andira Devid
                </Text>
                <Text fontSize="xs" color="gray.500" lineHeight="none">
                  Sep 10, 2025
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex
            direction="row"
            bg={"white"}
            shadow="sm"
            gap={8}
            borderRadius="lg"
            p={"8px"}
          >
            <Box flex={"1"}>
              <Image
                src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3?q=80&w=800&auto=format&fit=crop"
                alt="Featured article image"
                w="full"
                h="200px"
                objectFit="cover"
                loading="lazy"
                rounded={"lg"}
                aspectRatio={"square"}
              />
            </Box>
            <Box flex={"1"}>
              <Badge
                colorScheme="blue"
                variant="subtle"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight={"bold"}
                my={4}
                color={"green.400"}
              >
                Travel
              </Badge>
              <Text fontSize="lg" fontWeight="bold" mb={4}>
                14 Innovative Architectural Design to Create a Vast Interior
                Space
              </Text>
              <Box>
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.700"
                  lineHeight="none"
                >
                  Andira Devid
                </Text>
                <Text fontSize="xs" color="gray.500" lineHeight="none">
                  Sep 10, 2025
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>

        <Box
          as="section"
          bg="white"
          mt={"50px"}
          p={16}
          position={"relative"}
          left={0}
          w={"100%"}
          textAlign={"center"}
        >
          <Heading size={"5xl"} mb={"20px"}>
            Browse by Category
          </Heading>
          <Text color={"gray.600"} fontSize={"18px"}>
            Select a category to see more related content
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
