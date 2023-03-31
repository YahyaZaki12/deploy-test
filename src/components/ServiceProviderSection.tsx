import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useTheme, Stack } from '@mui/material';
import { ArrowRight } from 'phosphor-react';
import Image from 'next/image';

const ServiceProviderSection = () => {
    const theme = useTheme()
    return (
        <>
            <Stack
                alignItems={"flex-start"}
                justifyContent={"center"}
                spacing={1}
                sx={{
                    height: "1155px",
                    backgroundColor: "#EEEDED",
                    width: "100%",
                    borderRadius: "54px 363px",
                    padding: "0 60px",
                    position: "relative"
                }}>
                <Typography sx={{ font: "normal normal bold 40px/50px Montserrat", }}>
                    Are you a
                    <span style={{
                        marginLeft: "5px", color: theme.palette.primary.main,
                        borderBottom: `1px solid ${theme.palette.primary.main}`
                    }}>
                        Service Provider?
                    </span>
                </Typography>
                <Typography color={"secondary.dark"}>
                    Rerum quos quaerat quis. Mollitia consequatur nobis. Dolor
                    <br />
                    perferendis qui minima at labore. Quis aut quia earum non
                    <br />
                    enim aut nam.
                </Typography>
                <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems={"flex-end"}>
                    <Button
                        variant={"contained"}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "280px",
                            marginTop: "8px",
                            font: "normal normal medium 16px/25px Montserrat"
                        }}
                    >
                        Register Now
                        <ArrowRight color={"white"} size={32} />
                    </Button>
                    <Button
                        variant={"contained"}
                        sx={{
                            border: "2px solid #707070",
                            display: "flex",
                            backgroundColor: "inherit",
                            color: "black",
                            justifyContent: "space-between",
                            width: "280px",
                            marginTop: "8px",
                            font: "normal normal medium 16px/25px Montserrat",
                            zIndex: "23",
                            "&:hover": {
                                backgroundColor: "#707070",
                                color: "white"
                            }
                        }}
                    >
                        Register Now
                        <ArrowRight color={"black"} size={32} />
                    </Button>
                </Stack>
                <Stack direction={"row"}
                    justifyContent={"flex-end"}
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 60
                    }}>
                    <Image src={"/images/Service@2x.png"} width={1100} height={800} alt={"Afeela Service Provider Image"} />
                </Stack>
            </Stack>
        </>
    )
}

export default ServiceProviderSection