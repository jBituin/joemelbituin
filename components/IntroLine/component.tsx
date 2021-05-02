import React from 'react';
import { Box } from '@chakra-ui/react';

export const IntroLine: React.FC<Props> = (props) => {
  return (
    <Box transform='none' transformOrigin='0% 50% 0px'>
      <Box bg='red' mr='6' {...props}></Box>
    </Box>
  );
};
