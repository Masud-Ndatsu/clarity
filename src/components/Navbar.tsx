import { Box, Button, Center, Flex, Heading, Link } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaSearch, FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

const Navbar = () => {
  return (
    <Box pos="sticky" top={0} shadow={"sm"} p={3} zIndex={999} bg="white">
      <Flex justify={"space-between"} maxW={"1220px"} margin={"auto"} gap={12}>
        <Heading size={"3xl"} fontWeight={"bold"}>
          Clarity
        </Heading>
        <Flex gap={12}>
          <Link href="/">Home</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Support</Link>
        </Flex>

        <Flex align={"center"} gap={8}>
          <Flex gap={4}>
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaTwitter />
            </Link>
            <Link href="/">
              <FaLinkedin />
            </Link>
            <Link href="/">
              <FaPinterest />
            </Link>
          </Flex>{" "}
          <Center bg="gray.200" h={10} w={10} rounded={"full"}>
            <FaSearch />
          </Center>
          <Button size={"lg"} fontWeight={"bold"}>
            Suscribe
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
