import React from 'react'
import { Box, Typography, useTheme, Stack, Button } from '@mui/material';
import styles from "../styles/BookRide.module.css"
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';



const BookRideSection = () => {
    const theme = useTheme()
    return (
        <Box className={styles.book_ride_section} >
            <Stack spacing={2.3}>
                <Typography sx={{ font: "normal normal bold 40px/50px Montserrat" }}>
                    Late for your appointment?
                    <br />
                    <span style={{ color: theme.palette.primary.main, marginBottom: "10px" }}>
                        <span style={{ borderRadius: "4px", borderBottom: `3px solid ${theme.palette.primary.main}`, marginRight: "5px", }}>
                            No worries
                        </span>
                        we got you!
                    </span>
                </Typography>
                <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat", marginTop: "6px" }}>
                    Rerum quos quaerat quis. Mollitia consequatur nobis. Dolor
                    <br />
                    perferendis qui minima at labore. Quis aut quia earum non enim aut nam.
                </Typography>
                <Button variant={"contained"}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "266px",
                        marginTop: "8px"
                    }}>
                    Book Your Ride Now
                    <ArrowRight color={"white"} size={32} />
                </Button>
            </Stack>
            <Box>
                <Image src={"/images/Car@2x.png"} width={804} height={770} alt={"Afeela Taxi Image"} />
            </Box>
        </Box>
    )
}

export default BookRideSection