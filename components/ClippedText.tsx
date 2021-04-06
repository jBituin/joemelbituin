import { Text } from '@chakra-ui/react';

interface Props {
  text: string;
}

export const ClippedText: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <Text
      as={'span'}
      bgGradient='linear(to-r, red.400,pink.400)'
      bgClip='text'
      {...rest}
    >
      {text}
    </Text>
  );
};
