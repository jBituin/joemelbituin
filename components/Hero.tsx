import React from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

// const heroProps = {
//   title: "Hey, I'm Joemel",
//   subtitle: 'a full stack developer with 2 years of experience.',
//   image: 'https://source.unsplash.com/AWtfHYmRCP8/800x600',
//   ctaText: 'Know More',
//   ctaLink: '/signup',
// };

export const Hero: React.FC = ({ ...rest }) => {
  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap='nowrap'
      minH='80vh'
      width='100%'
      px={8}
      mb={16}
      backgroundImage={{ xl: 'url(../development.svg)' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={'right bottom 5.5rem'}
      backgroundSize='50%'
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '60%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as='h1'
          size='3xl'
          fontWeight='bold'
          color='primary.800'
          m='2'
          w='100%'
          textAlign={['left', 'left', 'left', 'left']}
        >
          Hey I'm{' '}
          <Text as='span' color='tomato'>
            Joemel
          </Text>
        </Heading>
        <Heading
          as='h2'
          size='2xl'
          color='primary.800'
          m='2'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign='left'
          w={{ lg: '70%' }}
        >
          a full stack developer with 2 years of experience.
        </Heading>
        <Button
          background='tomato'
          borderRadius='0'
          width={{ xs: 'full', sm: 'full', md: 'unset' }}
          py='4'
          px='4'
          m='2'
          lineHeight='1'
          size='md'
        >
          Know More
        </Button>
        <Text
          fontSize='xs'
          mt={2}
          textAlign='center'
          color='primary.800'
          opacity='0.6'
        ></Text>
      </Stack>
    </Flex>
  );
};
