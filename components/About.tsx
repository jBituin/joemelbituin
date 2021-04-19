import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
} from '@chakra-ui/react';
import { IntroLine } from './IntroLine';

interface AboutProps {
  scrollInto: (elementId: string) => void;
}
export const About: React.FC<AboutProps> = ({ children, ...props }) => {
  const { scrollInto } = props;
  return (
    <Container maxW={'8xl'} minH='100%' py={32} {...props} id='about'>
      <Flex direction='row' alignItems='center' mb='3rem'>
        <IntroLine w='3rem' h='1' />
        <Heading
          textTransform={'uppercase'}
          fontWeight={600}
          fontSize={'md'}
          rounded={'md'}
        >
          About
        </Heading>
      </Flex>
      <Stack
        spacing={10}
        direction={['column-reverse', 'column-reverse', 'row']}
      >
        <Stack spacing='20'>
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
              at{' '}
            </Text>
            who I am.
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
                    Back-End: Node, Rest API Development, MySQL, MongoDB
                  </Text>
                  <Text as='p'>Version Control: Git</Text>
                </VStack>
              </VStack>
            </HStack>
            <Button
              background='tomato'
              borderRadius='0'
              width={{ xs: 'full', sm: 'full', md: 'unset' }}
              py='4'
              px='4'
              m='2'
              lineHeight='1'
              size='md'
              maxW='7.5em'
              onClick={() => scrollInto('connect')}
            >
              Get in touch
            </Button>
          </Stack>
        </Stack>
        <Flex alignItems='center' p='3rem'>
          <Image
            maxWidth='500'
            width='100%'
            height='auto'
            borderRadius='full'
            margin='auto'
            alt={'Joemel Bituin'}
            src={'joemel.jpg'}
          />
        </Flex>
      </Stack>
    </Container>
  );
};
