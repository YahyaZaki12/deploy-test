import React from 'react'
import { Button, FormLabel, Grid, TextField, Typography, useTheme, Stack } from '@mui/material';

const ContactForm = () => {
    const theme = useTheme()
    return (
        <>
            <Grid container rowSpacing={3} columnSpacing={3}>

                <Grid item xs={12} >
                    <Typography sx={{ font: "normal normal bold 45px/35px Montserrat" }}>
                        <span style={{ marginRight: "5px", borderBottom: `2px solid ${theme.palette.primary.main}`, borderRadius: "2px", }}>
                            Get
                        </span>
                        in touch
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color={"secondary.dark"}>
                        Rerum quos quaerat quis. Mollitia consequatur nobis. Dolor perferendis qui
                        <br />
                        minima at labore. Quis aut quia earum non enim aut nam.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <FormLabel>Name *</FormLabel>
                    <TextField variant='filled' fullWidth defaultValue="Name" />

                </Grid>
                <Grid item xs={6}>
                    <FormLabel>Email Address *</FormLabel>
                    <TextField variant='filled' fullWidth defaultValue="Email@email.com" />

                </Grid>
                <Grid item xs={12}>
                    <FormLabel>Message *</FormLabel>
                    <TextField variant='filled' multiline rows={4} fullWidth defaultValue="Enter Message ..." />
                </Grid>
                <Grid item xs={12}>
                    <Stack direction={'row'} sx={{ width: "100%" }} justifyContent={"flex-end"}>
                        <Button sx={{width:"280px"}} variant={"contained"}>Submit</Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default ContactForm