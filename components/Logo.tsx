import React from 'react';
import { Box, Avatar } from '@chakra-ui/react';

interface Props {
  w: string;
  color: string[];
}

export const Logo: React.FC<Props> = (props) => {
  const avatarImageUrl =
    'https://avatars.githubusercontent.com/u/29895128?s=460&u=832604e22a3e97ae92d803407757b7ad3978468d&v=4';
  const avatarImageName = 'Joemel Bituin';
  return (
    <Box {...props}>
      <Avatar
        border='2px solid tomato'
        name={avatarImageName}
        src={avatarImageUrl}
      ></Avatar>
    </Box>
  );
};
