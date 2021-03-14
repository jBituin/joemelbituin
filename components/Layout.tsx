import { Container, Box } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC = ({ children }) => (
  <Box>
    <Navbar color='black' bg='white' />
    <Box>{children}</Box>
    <Footer />
  </Box>
);
