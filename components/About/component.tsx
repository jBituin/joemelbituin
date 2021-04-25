import {
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
} from '@chakra-ui/react';
import { IntroLine } from 'components';
import { Section } from 'components';
import { Props } from './props';

export const About: React.FC<Props> = ({ children, scrollInto, ...rest }) => {
  return (
    <Section
      id='about'
      title={'About'}
      description={'Get a closer look at who I am'}
      {...rest}
    >
      <Stack
        spacing={10}
        direction={['column-reverse', 'column-reverse', 'row']}
      >
        <Stack spacing='20'>
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
                    complex logic behind it. My main <br />
                    technology stack includes Vue, React, and Node
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
        <Flex
          alignItems='center'
          p='3rem'
          transform={{ lg: 'translate(8rem, -8rem)' }}
        >
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
    </Section>
  );
};
