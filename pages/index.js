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
                    Software Development Engineer @ Amazon, UW SYDE 2025
                </Box>
                <Section delay={0.1}>
                    <Intro>
                    <Heading as="h2" variant="section-title">
                        Hello!
                    </Heading>
                    <Image src={prayerImg} ml={4} width={7} height={7} alt="logo" />
                    </Intro>                    
                    <Paragraph>
                        Thank you for stopping by! I am an enthusiastic, team-oriented and curious software engineer who graduated from Sytems Design Engineering at the University of Waterloo!
                        I have 2 years of experience working in backend and full stack roles, and am looking for new grad opportunities! Super excited to build cool stuff and get better at what I do. Learn more about my credentials below by checking out my contacts!
                    </Paragraph>
                    <Paragraph>
                        While I am not being a nerd (not that there is nothing wrong with being a nerd!) I enjoy carrying teams in various video games, swimming with friends, destroying those same friends at badminton, playing table tennis in office (after completing work), 
                        taking banger photos and playing music! I also work part time as a User Experience Evaluator and Quality Assurance Analyst at Google (I write Google Reviews for food spots, unpaid) so maybe if you would like to meet in person, reach out and maybe we can find 
                        something yummy to eat! 
                    </Paragraph>
                </Section>
                <Section delay={0.3}>
                     <Heading as="h2" variant="section-title" ml={2.5}>
                        Contact me!
                    </Heading>
                    <List pl={2}>
                    <ListItem>
                        <Link href="/files/David Liu Resume Jan 2026.pdf" download target="_blank">
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
                        <Link href="mailto:david.liu742@gmail.com" target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<Icon as={MdEmail} />}
                        >
                            Email: david.liu742@gmail.com
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