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

import { IntroLine } from './IntroLine';

export const About: React.FC = () => {
  return (
    <Container maxW={'8xl'} minH='100%' py={32}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={20}>
          <Flex direction='row' alignItems='center'>
            <IntroLine w='3rem' h='1' />
            <Heading
              HeadingTransform={'uppercase'}
              fontWeight={600}
              fontSize={'md'}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              About
            </Heading>
          </Flex>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          >
            Get a closer look{' '}
            <Text
              as={'span'}
              bgGradient='linear(to-r, red.400,pink.400)'
              bgClip='text'
            >
              at
            </Text>{' '}
            who I am.{' '}
          </Heading>
          <Stack spacing={20}>
            <HStack align={'top'} spacing={4}>
              <VStack align={'start'}>
                <Flex direction='row' alignItems='center'>
                  <IntroLine w='1rem' h='1' />
                  <Heading size='md' fontWeight={600}>
                    Who Am I
                  </Heading>
                </Flex>
                <VStack align={'start'}>
                  <Text as='p'>
                    I'm Joemel Bituin, 21 years old and from Philippines
                  </Text>
                  <Text as='p'>
                    I enjoy creating high-quality software products with a
                    complex logic behind it. My main technology stack includes
                    Vue, React, and Node
                  </Text>
                  <Text as='p'>
                    I enjoy reading novels, watch movies, and listen to music.
                  </Text>
                </VStack>
              </VStack>
            </HStack>

            <HStack align={'top'} spacing={4}>
              <VStack align={'start'}>
                <Flex direction='row' alignItems='center'>
                  <IntroLine w='1rem' h='1' />
                  <Heading size='md' fontWeight={600}>
                    Skills and Tools
                  </Heading>
                </Flex>
                <VStack align={'start'}>
                  <Text as='p'>
                    Front-End: Vue/Nuxt, React/Next, ChakraUI, HTML, CSS
                  </Text>
                  <Text as='p'>
                    Back-End: Node, Rest API Development/Third Party Integration
                  </Text>
                  <Text as='p'>Version Control: Git</Text>
                </VStack>
              </VStack>
            </HStack>
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
