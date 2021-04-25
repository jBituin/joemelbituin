import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Props } from './props';

export const Logo: React.FC<Props> = (props) => {
  return (
    <Box {...props}>
      <Text letterSpacing='4px' fontSize={['1em', '2.5em']} fontWeight='bold'>
        {' '}
        JOMS
        <Text as='span' color='red'>
          .
        </Text>
      </Text>
    </Box>
  );
};
