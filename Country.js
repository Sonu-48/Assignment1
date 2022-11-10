import React from 'react';
import { Container, Grid, Box, Typography, makeStyles, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    parentbox: {
        border: '1px solid #ddd',
        borderRadius: '3px',
    },
    headingbox: {
        background: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        padding: "5px",
        "&:hover": {
            background: "skyblue"
        }
    },
    childbox: {
        borderBottom: '1px solid #ddd',
        padding: "5px",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    lastbox: {

        padding: "5px",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between'
    }


}))

const data = [
    {
        country: 'India',
        flag: "images/Indianflag.webp",

        capital: 'New Delhi',
        currency: "INR",
    },
    {
        country: 'Afghanistan',
        flag: "images/Afghanistanflag.png",

        capital: 'Kabul',
        currency: "AFN",
    },
    {
        country: 'Australia',
        flag: "images/Australiaflag.jpg",

        capital: 'Canberra',
        currency: "AUD",
    },
    {
        country: 'Brazil',
        flag: "images/Brazilflag.png",

        capital: 'Brasília',
        currency: "BRL",
    },
]

function Country() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box pt={4}>
            <Container>
                <Grid container spacing={2}>
                    {data.map((value) => (

                        <Grid item lg={4} md={4} sm={4} xs={12}>
                            <Box className={classes.parentbox}>
                                <Button fullWidth className={classes.headingbox}
                                >
                                    <Typography variant="h5" >{value.country}
                                    </Typography>
                                    {value.country === "India" ? <Button fullWidth onClick={() => history.push("/India")}></Button> : value.country === "Afghanistan" ?
                                        <Button fullWidth onClick={() => history.push("/Afghanistan")}></Button> : value.country === "Australia" ? <Button fullWidth onClick={() => history.push("/Australia")}></Button> : value.country === "Brazil" ?
                                            <Button fullWidth onClick={() => history.push("/Brazil")}></Button> : <></>
                                    }
                                    </Button>
                                <Box className={classes.childbox}>
                                    <Typography variant="body1">Flag</Typography>
                                    <img src={value.flag} alt="image" width="15%" />
                                </Box>
                                <Box className={classes.childbox}>
                                    <Typography variant="body1">Currency</Typography>
                                    <Typography variant="body2">{value.currency}</Typography>
                                </Box>
                                <Box className={classes.lastbox}>
                                    <Typography variant="body1">Capital</Typography>
                                    <Typography variant="body2">{value.capital}</Typography>
                                </Box>
                            </Box>
                        </Grid>


                    ))}

                </Grid>

            </Container>
        </Box>

    );
}
export default Country;