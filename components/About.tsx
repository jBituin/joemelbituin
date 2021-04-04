import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  HStack,
  Box,
  VStack,
} from '@chakra-ui/react';
import { IoFingerPrint, IoLaptopOutline } from 'react-icons/io5';

const features = [
  {
    title: 'Who Am I',
    text: `I'm Joemel Bituin, 21 years old and from Philippines.\n
    Digital design has been an interest of mine for many years, and I work with anything from logo design to UI design and front-end development.
    All the skills and tools I use, are self-taught over many years of practice and expanding my horizons.`,
    icon: IoFingerPrint,
  },
  {
    title: 'Skills and Tools',
    text:
      'Development: JavaScript, React, Next.js, HTML, CSS/SCSS, TailwindCSS, WordPress',
    icon: IoLaptopOutline,
  },
];

export const About: React.FC = () => {
  return (
    <Container maxW={'8xl'} minH='100%' py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            About
          </Text>
          <Heading>Get a closer look at who I am.</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            {features.map((feature, idx) => (
              <HStack key={idx} align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={feature.icon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </Stack>
        </Stack>
        {/* <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex> */}
      </SimpleGrid>
    </Container>
  );
};
