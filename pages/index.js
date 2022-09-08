import { Container, Box, Image, Heading, Grid, List, ListItem, Link, Button, Icon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Intro from '../components/intro'
import { IoLogoLinkedin, IoLogoGithub, IoCodeSlash } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { AiFillFilePdf } from 'react-icons/ai'

function HomePage() {
    const prayerImg = `/images/prayer.png`

    return (
        <Layout>
            <title>DAVID LIU</title>
            <Container
                mt={{base:4}}
            >
                <Container 
                    flexDirection='row'
                    display='flex'
                    >
                <Box
                    display={{ md: 'flex'}}
                    flexShrink={0}
                    mt={{base: 4}}
                    textAlign="left">
                        <Image 
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/davidliu.jpg"
                            alt="Profile image"
                        />
                </Box>
                    <Box 
                        flexGrow={1}
                        mt='10'
                        ml='6'
                    >
                        <Heading as="h2" variant="page-title">
                        David Liu
                    </Heading>
                    <p>Full-Stack Developer</p>
                    </Box>
                </Container>
                <Box borderRadius="lg" bg={'whiteAlpha.100'} p={3} mb={6} mt={6} align="left">
                    Systems Design Engineering Student @uWaterloo
                </Box>
                <Section delay={0.1}>
                    <Intro>
                    <Heading as="h2" variant="section-title">
                        Hello!
                    </Heading>
                    <Image src={prayerImg} ml={4} width={7} height={7} alt="logo" />
                    </Intro>                    
                    <Paragraph>
                        Thank you for stopping by! I am an enthusiastic, team-oriented and curious software engineer. I specialize in using JavaScript libraries and frameworks to develop fully functional web and desktop applications. Learn more about my credentials below by checking out my contacts!
                    </Paragraph>
                    <Paragraph>
                        While I am not being a nerd (joking, coding is very cool) I enjoy carrying teams in various video games, swimming with friends, destroying those same friends at badminton, taking banger photos and playing music! I also work part time as a bubble tea engineer at Gong Cha, so if you would like to meet, pop by for an iced QQ Peach Green tea with 50% sugar :) It's very yummy.
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                     <Heading as="h2" variant="section-title" ml={2.5}>
                        Contact me!
                    </Heading>
                    <List pl={2}>
                    <ListItem>
                        <Link href="/files/DAVID LIU RESUME - SEPT 2022.pdf" download target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={AiFillFilePdf} />}
                        >
                            Resume
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/d282liu" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoGithub} />}
                        >
                            Git: @d282liu
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://devpost.com/david-liu742" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoCodeSlash} />}
                        >
                            DevPost: @david-liu742
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/davidliu13/" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={IoLogoLinkedin} />}
                        >
                            LinkedIn: @davidliu13
                        </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="mailto:david.liu2@uwaterloo.ca" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={MdEmail} />}
                        >
                            Email: @david.liu2@uwaterloo.ca
                        </Button>
                        </Link>
                    </ListItem>
                    </List>                                        
                </Section>
            </Container>
        </Layout>
    )
}

export default HomePage