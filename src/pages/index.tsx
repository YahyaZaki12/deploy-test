import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { Box, Container, useMediaQuery, useTheme } from "@mui/material"
import Footer from './../components/Footer';
import HeroSection from '@/components/HeroSection'
import OurServices from '@/components/OurServices'
import BookRideSection from '@/components/BookRideSection'
import ServiceProviderSection from '@/components/ServiceProviderSection'
import DownloadAppSection from '@/components/DownloadAppSection'
import ContactForm from '@/components/ContactForm'
import { Element } from 'react-scroll'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme()
  const matches = useMediaQuery('(min-width:900px)');
  return (
    <>
      <Head>
        <title>Afeela</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/Face 2@2x.png" />
      </Head>
      <Box sx={{ padding: "0px 50px" }}>
        <Header />
      </Box>
      <Container
        //@ts-ignore
        maxWidth={"xl"}
        sx={{ justifyContent: "center", width: "100%", display: "flex", flexDirection: "column", gap: "120px", marginBottom: "50px" }}
      >
        <Box>
          <Element name={"home"}>
            <HeroSection />
          </Element>
        </Box>
        <Element name={"services"}>
          <OurServices />
        </Element>
        <Box sx={{ position: "relative", zIndex: "32" }}>
          <Box>
            <Element name={"about"}>
              <BookRideSection />
            </Element>
          </Box>
          <Box sx={{
            position: "absolute",
            zIndex: "-2",
            top: "590px",
            right: { xs: "-50px", md: "-90px" },
            width: "110%",
          }}>
            <Element name={"become-provider"}>
              <ServiceProviderSection />
            </Element>
          </Box>
        </Box>
        <Box sx={{ position: "relative", marginTop: { xs: "750px", md: "650px" } }}>
          {matches &&
            <Box
              sx={{
                position: "absolute",
                backgroundColor: `${theme.palette.primary.main}`,
                borderRadius: "50%",
                left: {
                  xs: -710,
                  md: -610,
                },
              }}>
              <Image src={"/images/Face 2@2x.png"} width={928} height={928} alt={"Iphone App"} />
            </Box>
          }

          <Element name={"download-app-section"}>
            <DownloadAppSection />
          </Element>
        </Box>
        <Element name={"contact-us"}>
          <ContactForm />
        </Element>
      </Container>
      <Footer />
    </>
  )
}
