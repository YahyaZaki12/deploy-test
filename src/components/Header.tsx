import React, { useState } from 'react'
import { Stack, Grid, Box, List, ListItem, Button, useTheme, useMediaQuery, IconButton, Menu, MenuItem, Drawer } from "@mui/material"
import { Link, animateScroll as scroll } from 'react-scroll'
import Image from 'next/image'
import { List as ListIcon, X } from "phosphor-react"

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
    const [open, setOpen] = useState(false)
    const smMatches = useMediaQuery('(min-width:900px)');
    const handlClose = () => {
        setOpen(false)
    }
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
            {smMatches ?
                <>
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
                                    <Link to={`${section.id}`} smooth={true} duration={600} spy={true}>
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
                </>
                : <>
                    <IconButton onClick={() => setOpen(true)}>
                        <ListIcon size={32} />
                    </IconButton>
                    <Drawer open={open} anchor='top'>
                        <Stack justifyContent={"center"} direction={"row"} sx={{ width: "100%" }}>
                            {/* <Image src={"/images/Logo@2x.png"} alt={"Afeea Logo"} width={160} height={70} /> */}

                            <IconButton onClick={handlClose}>
                                <X size={32} />
                            </IconButton>
                        </Stack>
                        {header_sections.map((section) => {
                            return <Stack
                                key={section.id}
                            >
                                <Link to={`${section.id}`} smooth={true} duration={600} spy={true}>
                                    <MenuItem key={section.id} onClick={handlClose}>
                                        {section.name}
                                    </MenuItem>
                                </Link>
                            </Stack>
                        })}
                    </Drawer>
                </>
            }
        </Grid >
    </>
}

export default Header