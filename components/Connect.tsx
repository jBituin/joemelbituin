import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { IntroLine } from './IntroLine';

export const Connect: React.FC = () => {
  return (
    <Container maxW={'8xl'} minH='100%' py={32} id='connect'>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing='20'>
          <Flex direction='row' alignItems='center'>
            <IntroLine w='3rem' h='1' />
            <Heading
              textTransform={'uppercase'}
              fontWeight={600}
              fontSize={'md'}
              alignSelf={'flex-start'}
              rounded={'md'}
            >
              Connect
            </Heading>
          </Flex>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          >
            Interested in working with me or perhaps just talk?
          </Heading>
          <Stack spacing={20}>
            <HStack align={'top'} spacing={4}>
              <VStack align={'start'}>
                <VStack align={'start'}>
                  <Text as='p'>
                    Feel free to drop me a message if you have some interesting
                    offer or you want to hang out.
                  </Text>
                  <Text as='p'>Send an email to: bituinjoemel@gmail.com</Text>
                </VStack>
              </VStack>
            </HStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
