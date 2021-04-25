import React from 'react';
import { Button, Flex, Link, Heading, Stack, Text } from '@chakra-ui/react';
import { Props } from './props';

export const Hero: React.FC<Props> = ({ scrollInto, ...rest }) => {
  const arrowFunction = '() => {}';

  return (
    <Flex
      align='center'
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap='nowrap'
      width='100%'
      my='4rem'
      backgroundImage={{ xl: 'url(../development.svg)' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={'right bottom 5.5rem'}
      backgroundSize='50%'
      minH={{ md: '600px', lg: '750px' }}
      {...rest}
    >
      <Text
        fontSize={['90px', '150px', '300px']}
        position='fixed'
        top={{ lg: 0 }}
        color='grey'
        opacity='0.1'
      >
        {arrowFunction}
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
      </Stack>
    </Flex>
  );
};
