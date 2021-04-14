import { Flex, Box } from '@chakra-ui/react';

export const NavbarContainer: React.FC = ({ children, ...props }) => {
  return (
    <Box w='100%' position='sticky' top='0'>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        wrap='wrap'
        width='100%'
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        color={['white', 'white', 'primary.700', 'primary.700']}
        {...props}
      >
        {children}
      </Flex>
    </Box>
  );
};
