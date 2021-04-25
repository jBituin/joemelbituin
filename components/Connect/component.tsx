import { SimpleGrid, Text, Stack, HStack, VStack } from '@chakra-ui/react';
import { Section } from 'components';

export const Connect: React.FC = () => {
  return (
    <Section
      id='connect'
      title={'Connect'}
      description={'Interested in working with me or perhaps just talk?'}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing='20'>
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
    </Section>
  );
};
