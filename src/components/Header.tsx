import React from 'react'
import { Stack, Grid, Box, List, ListItem, Button, useTheme } from "@mui/material"
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'

const header_sections = [
    {
        name: "Home",
        id: "home",
    },
    {
        name: "Services",
        id: "services",
    },
    {
        name: "About",
        id: "about",
    },
    {
        name: "Contact Us",
        id: "contact-us",
    },
    {
        name: "Become Provider",
        id: "become-provider",
    },
]

const Header = () => {
    const theme = useTheme()
    return <>
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{ width: "100%", margin: "50px 0px" }}
        >
            <Grid item xs={2}>
                <Image src={"/images/Logo@2x.png"} alt={"Afeea Logo"} width={160} height={70} />
            </Grid>
            <Grid item xs={true}>
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        gap: "5px",
                    }}
                >
                    {header_sections.map((section) => {
                        return <Stack
                            key={section.id}
                        >
                            <Link to={`${section.id}`} smooth={true} duration={400} spy={true}>
                                <ListItem
                                    sx={{
                                        maxWidth: "max-content",
                                        cursor: "pointer",
                                        padding: "0",
                                        wordBreak: "keep-all"
                                    }}>
                                    {section.name}
                                </ListItem>
                                <Box
                                    sx={{
                                        height: "2px",
                                        borderRadius: "4px",
                                        backgroundColor: `${theme.palette.primary.main}`,
                                        border: `1px solid ${theme.palette.primary.main} `,
                                    }}
                                ></Box>
                            </Link>

                        </Stack>
                    })}
                </List>
            </Grid>
            <Grid item>
                <Link to={"download-app-section"} smooth={true}>
                    <Button variant='contained' sx={{ margin: "16px 40px", width: "auto" }}> Download The App</Button>
                </Link>
            </Grid>
        </Grid >
    </>
}

export default Header