import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, Link, Heading, Stack, Text } from '@chakra-ui/react';

interface HeroProps {
  scrollInto: (elementId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ ...props }) => {
  const { scrollInto } = props;

  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap='nowrap'
      width='100%'
      my='4rem'
      {...props}
    >
      <Text
        fontSize={['100px', '200px', '300px']}
        position='fixed'
        opacity='0.1'
        mt='20px'
        color='grey'
      >
        {'() => { }'}
      </Text>
      <Stack
        spacing={4}
        w={{ base: '90%', md: '100%' }}
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
          Hello there! I'm{' '}
          <Text as='span' color='tomato'>
            Joemel.
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
          w='100%'
        >
          A Full Stack Javascript Developer.
        </Heading>
        <Flex dir='row'>
          {/* <NextLink href='#about' scroll> */}
          <Button
            background='tomato'
            borderRadius='0'
            width={{ xs: 'full', sm: 'full', md: 'unset' }}
            py='4'
            px='4'
            m='2'
            lineHeight='1'
            size='md'
            onClick={() => scrollInto('about')}
          >
            Know More
          </Button>
          {/* </NextLink> */}
          <Link target='_blank' href='joemel-bituin.pdf'>
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
              Resume
            </Button>
          </Link>
        </Flex>
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
