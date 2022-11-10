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

function India()
{
    const classes = useStyles();
    return(

       <Page title="India | Countries of the World">
         <Box pt={5} className={classes.mainbox}>
            <Container>
               
               <Typography variant="h1">Information of the India</Typography>
               <Box pt={5}>
                    <Typography variant="h5">1. Chenab Bridge is the highest rail bridge in the world.</Typography>
                    <Typography variant="h5">2.  India was the first country to mine diamonds.</Typography>
                    <Typography variant="h5">3. Ranked the second-most populous country in the world.</Typography>
                    <Typography variant="h5"> 4. Most Indians eat with only their fingers.</Typography>
                    <Typography variant="h5">5. “Indian food” has become one of the most widespread cuisines in the world.</Typography>
                    <Typography variant="h5">6.  During World War II, the Taj Mahal was disguised as a bamboo stockpile.</Typography>
                    <Typography variant="h5">7. India has one of the lowest divorce rates in the world.</Typography>
                    <Typography variant="h5">8. Varanasi is the most ancient surviving city in the world.</Typography>
                    <Typography variant="h5">9. Dehradun is a most popular Hill Stations in India.</Typography>
                    <Typography variant="h5">10. Cows are considered sacred in India.
</Typography>
               </Box>
            </Container>
        </Box>
       </Page>
    );
}
export default India;