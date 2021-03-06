import { NavbarContainer } from './libs/NavbarContainer';
import { Logo } from 'components';
import { MenuToggle } from './libs/MenuToggle';
import { MenuLinks } from './libs/MenuLinks';
import { useState } from 'react';

interface Props {
  color?: string;
  bg?: string;
}

export const Navbar: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo
        w='200px'
        color={['black', 'black', 'primary.500', 'primary.500']}
      />
      {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
      {/* <MenuLinks isOpen={isOpen} /> */}
    </NavbarContainer>
  );
};
