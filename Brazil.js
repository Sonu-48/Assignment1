import React from 'react';
import {Container,makeStyles,Box,Typography} from "@material-ui/core";
import Page from "src/component/Page";

const useStyles = makeStyles((theme)=>({
    mainbox:{
        "& h1":{
            textAlign:"center",
            color:'green',
            textDecoration:"underline"
        },
        "& h5":{
            paddingBottom:'10px',
        }
    }

}))


function Brazil()
{
    const classes = useStyles();
    return(
        <Page title ="Brazil | Countries of the World">
            <Box pt={5} className={classes.mainbox}>
                <Container>
                <Typography variant="h1">Information of the  Brazil</Typography>
                <Box pt={5}>
                    <Typography variant="h5">1.Brazil is the largest country in South America.</Typography>
                    <Typography variant="h5">2.In Brazil people speak Portuguese. </Typography>
                    <Typography variant="h5">3. Brazil is home to the 2nd longest river in the world.</Typography>
                    <Typography variant="h5">4. One of the most popular things to eat is feijoada in Brazil.</Typography>
                    <Typography variant="h5">5.  Brazil has the biggest carnival in the world.</Typography>
                    <Typography variant="h5">6. Brazilians love football.</Typography>
                    <Typography variant="h5">7. The Brazilian flag has 27 stars on it.</Typography>
                    <Typography variant="h5">8.  Around 60% of the Amazon Rainforest is in Brazil.</Typography>
                    <Typography variant="h5">9. Brazil is the fifth-largest country in the world by land area and sixth-largest by population.</Typography>
                    <Typography variant="h5">10. Brazil was the last country in the Americas to abolish slavery, in 1888.</Typography>
                </Box>

                </Container>
        </Box>
        </Page>
    );
}
export default Brazil;