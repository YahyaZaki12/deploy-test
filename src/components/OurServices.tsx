import { Box, Typography, Stack } from '@mui/material'
import React from 'react'
import ServiceCard from './ServiceCard'
import { Grid, useTheme } from '@mui/material';
import { } from 'phosphor-react';

const OurServices = () => {
    const theme = useTheme()
    return (
        <Grid container
            rowGap={2}
            rowSpacing={2}
            justifyContent={"space-between"}
            columnGap={4}
            sx={{
                background: "transparent linear-gradient(180deg, #FFF0F0 0%, #FFFFFF 100%) 0% 0% ",
                height: "100%",
                borderRadius: "8px",
                padding:"50px"
            }}
        >
            <Grid item xs={12}>
                <Stack spacing={3}>
                    <Typography sx={{ font: "normal normal 800 45px/35px Montserrat" }}>
                        <span style={{ marginRight: "10px", borderRadius: "4px", borderBottom: `4px solid ${theme.palette.primary.main}` }}>
                            Our
                        </span>
                        Services
                    </Typography>
                    <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat" }}>
                        Rerum quos quaerat quis. Mollitia consequatur nobis. Dolor perferendis qui
                        <br />
                        minima at labore. Quis aut quia earum non enim aut nam.
                    </Typography>
                </Stack>
            </Grid>
            <Grid item >
                <ServiceCard
                    styles={{ backgroundColor: "#FFF9F0" }}
                    title={"Car Ride"}
                    subtitle={"Faster, Cheaper"}
                    image={{ link: "/images/car_rental.png", width: 200, height: 130 }}
                    redirectionLink='#'
                    desc={"Magni quisquam commodi. Quia autem cum saepe tempore corporis inventore voluptatum voluptas est. Debitis et eum illum consequatur porro omnis est modi. Omnis fuga ut voluptatibus aliquid."}
                />
            </Grid>
            <Grid item   >
                <ServiceCard
                    styles={{ backgroundColor: "#F0F6FF" }}
                    title={"Car Ride"}
                    subtitle={"Faster, Cheaper"}
                    image={{ link: "/images/car_ride.png", width: 200, height: 130 }}
                    redirectionLink='#'
                    desc={"Magni quisquam commodi. Quia autem cum saepe tempore corporis inventore voluptatum voluptas est. Debitis et eum illum consequatur porro omnis est modi. Omnis fuga ut voluptatibus aliquid."}
                />
            </Grid>
            <Grid item >
                <ServiceCard
                    styles={{ backgroundColor: "#202426", color: "white", paddingRight: "30px", paddingTop: "", }}
                    title={"Car Rental"}
                    subtitle={"Faster, Cheaper"}
                    image={{ link: "/images/3@2x.png", width: 123, height: 130 }}
                    redirectionLink='#'
                    desc={"Magni quisquam commodi. Quia autem cum saepe tempore corporis inventore voluptatum voluptas est. Debitis et eum illum consequatur porro omnis est modi. Omnis fuga ut voluptatibus aliquid."}
                />
            </Grid>
            <Grid item xs={4.1} >
                <ServiceCard
                    styles={{ backgroundColor: "#FFF9F0", paddingRight: "30px", paddingTop: "30px", }}
                    title={"Road Assistant"}
                    subtitle={"Faster, Cheaper"}
                    image={{ link: "/images/road_assist.png", width: 88, height: 130 }}
                    redirectionLink='#'
                    desc={"Magni quisquam commodi. Quia autem cum saepe tempore corporis inventore voluptatum voluptas est. Debitis et eum illum consequatur porro omnis est modi. Omnis fuga ut voluptatibus aliquid."}
                />
            </Grid>
            <Grid item  xs={true} >
                <ServiceCard
                    styles={{ backgroundColor: "#F0F6FF", paddingRight: "30px", paddingTop: "42px", }}
                    title={"Salik"}
                    subtitle={"Faster, Cheaper"}
                    image={{ link: "/images/Salik@2x.png", width: 124, height: 110 }}
                    redirectionLink='#'
                    desc={"Magni quisquam commodi. Quia autem cum saepe tempore corporis inventore voluptatum voluptas est. Debitis et eum illum consequatur porro omnis est modi. Omnis fuga ut voluptatibus aliquid."}
                />
            </Grid>

        </Grid>
    )

}

export default OurServices