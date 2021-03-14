import React from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

interface Props {
  children: string;
  isLast: boolean;
  isActive: boolean;
  to: string;
  rest?: {};
}

export const MenuItem: React.FC<Props> = ({
  children,
  isLast,
  to = '/',
  isActive,
  ...rest
}) => {
  const getText = () => {
    console.log('isActive :>> ', isActive);
    console.log('to :>> ', to);
    if (isActive) {
      return (
        <Text fontWeight='bold' color='tomato'>
          {children}
        </Text>
      );
    }
    return <Text>{children}</Text>;
  };
  return (
    <Link href={to}>
      <Text display='block' {...rest}>
        {getText()}
      </Text>
    </Link>
  );
};

export default MenuItem;
