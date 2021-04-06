import { Flex } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children, ...rest }) => (
  <Flex
    direction='column'
    align='center'
    maxW={{ xl: '1400px' }}
    m='0 auto'
    w='100%'
    {...rest}
  >
    <Navbar color='black' bg='white' />
    {children}
    <Footer />
  </Flex>
);
