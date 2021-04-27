import { Flex } from '@chakra-ui/react';
import { Navbar } from 'components';
import { Footer } from 'components';

export const Layout: React.FC = ({ children, ...rest }) => (
  <Flex
    direction='column'
    align='center'
    maxW={{ xl: '1400px' }}
    m='0 auto'
    p={['1rem', '2rem', '']}
    w='100%'
    {...rest}
  >
    <Navbar color='black' bg='white' />
    {children}
    <Footer />
  </Flex>
);
