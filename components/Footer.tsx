import { Box, Text, Icon } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <Box
      maxHeight={60}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Text>
        Made with <Icon as={FiHeart} color='red' fill='red'></Icon> by &nbsp;
      </Text>
      <Text color='tomato'>Joemel Bituin&nbsp;</Text>
      <Text>with&nbsp;</Text>
      <Text color='tomato'>React.js&nbsp;</Text>
      <Text>and&nbsp;</Text>
      <Text color='tomato'>Next.js</Text>
    </Box>
  );
};
