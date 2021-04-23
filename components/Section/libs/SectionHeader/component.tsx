import React from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { IntroLine } from 'components';
import { Props } from './props';

export const SectionHeader: React.FC<Props> = ({
  title,
  description,
  ...rest
}: Props) => {
  return (
    <Stack spacing={20} {...rest}>
      <Flex direction='row' alignItems='center'>
        <IntroLine w='3rem' h='1' />
        <Heading
          textTransform={'uppercase'}
          fontWeight={600}
          fontSize={'md'}
          alignSelf={'flex-start'}
          rounded={'md'}
        >
          {title}
        </Heading>
      </Flex>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
        maxW={['50rem']}
        mb='5rem'
      >
        {description}
      </Heading>
    </Stack>
  );
};
