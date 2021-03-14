import { Box } from '@chakra-ui/react';
import { FiX, FiMenu } from 'react-icons/fi';

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle: React.FC<Props> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <FiX /> : <FiMenu />}
    </Box>
  );
};
