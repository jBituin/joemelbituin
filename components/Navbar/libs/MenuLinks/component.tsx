import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MenuItem } from '../MenuItem';

interface Props {
  isOpen: boolean;
}

export const MenuLinks: React.FC<Props> = ({ isOpen }) => {
  const router = useRouter();

  const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'Projects', to: '/projects' },
    { text: 'About', to: '/about' },
    { text: "Let's Talk", to: '/contact-me' },
  ];

  const renderMenuItems = () => {
    return menuItems.map(({ to, text }, index) => {
      return (
        <MenuItem
          to={to}
          isLast={index === menuItems.length - 1}
          isActive={router.pathname === to}
          key={to}
        >
          {text}
        </MenuItem>
      );
    });
  };
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {renderMenuItems()}
      </Stack>
    </Box>
  );
};
