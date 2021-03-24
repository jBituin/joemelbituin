import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';

export default function Home() {
  const heroProps = {
    title: "I'm Joemel Bituin",
    subtitle:
      'Web Developer with almost 2 years of experience. Experienced with all stages of the development cycle for dynamic web',
    image: 'https://source.unsplash.com/AWtfHYmRCP8/800x600',
    ctaText: 'Download Resume',
    ctaLink: '/signup',
  };

  return (
    <Layout>
      <Hero {...heroProps} />
      {/* <Container maxW='xl' centerContent>
        {' '}
        <Stack
          minH={'85vh'}
          minW={'100vw'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '2xl', md: '2xl', lg: '4xl' }}>
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '10%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'tomato.400',
                    zIndex: -1,
                  }}
                >
                  Looking for a Developer ?
                </Text>
                <br />{' '}
              </Heading>
              <Text
                color={'tomato'}
                as={'span'}
                fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
                fontWeight='bold'
              >
                I'm Joemel Bituin
              </Text>{' '}
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Web Developer with almost 2 years of experience. Experienced
                with all stages of the development cycle for dynamic web
                projects.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container> */}
    </Layout>
  );
}
