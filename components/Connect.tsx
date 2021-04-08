import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  HStack,
  Box,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  IoFingerPrint,
  IoLaptopOutline,
  IoLogoVue,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoNodejs,
  IoLocation,
} from 'react-icons/io5';

const features = [
  {
    title: 'Who Am I',
    contents: [
      {
        title: `I'm Joemel Bituin, 21 years old and from Philippines`,
        icon: IoLocation,
      },
    ],
    icon: IoFingerPrint,
  },
  {
    title: 'Skills and Tools',
    contents: [
      {
        title: 'Vue',
        icon: IoLogoVue,
      },
      {
        title: 'Node',
        icon: IoLogoNodejs,
      },
      {
        title: 'React',
        icon: IoLogoReact,
      },
      {
        title: 'HTML5',
        icon: IoLogoHtml5,
      },
      {
        title: 'CSS',
        icon: IoLogoCss3,
      },
      {
        title: 'Git',
        icon: IoLogoGithub,
      },
    ],
    icon: IoLaptopOutline,
  },
];

export const Connect: React.FC = () => {
  return (
    <Container maxW={'8xl'} minH='100%' py={32}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={20}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Connect
          </Text>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
          >
            Interested in working with me or perhaps just talk?
          </Heading>
          <Stack
            spacing={20}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            {features.map((feature, idx) => (
              <HStack key={idx} align={'top'} spacing={4}>
                <Box color={'green.400'} px={2}>
                  <Icon as={feature.icon} />
                </Box>
                <VStack align={'start'}>
                  <Heading size='md' fontWeight={600}>
                    {feature.title}
                  </Heading>
                  {feature.contents.map((content) => (
                    <HStack align={'start'} key={content.title}>
                      <Box color={'green.400'} px={2}>
                        <Icon as={content.icon} />
                      </Box>
                      <Text>{content.title}</Text>
                    </HStack>
                  ))}
                </VStack>
              </HStack>
            ))}
          </Stack>
        </Stack>
        {/* <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex> */}
      </SimpleGrid>
    </Container>
  );
};
