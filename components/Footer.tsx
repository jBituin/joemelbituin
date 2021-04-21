import { Box, Text, Icon } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const Footer: React.FC = ({ ...rest }) => {
  return (
    <Box
      w='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      margin='1rem'
      {...rest}
    >
      <Text as='span'>
        Made with <Icon as={FiHeart} color='red' fill='red'></Icon> by Joemel
        Bituin <wbr />
        with React.js and Next.js
      </Text>
    </Box>
  );
};
