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


function Afghanistan()
{
    const classes = useStyles();
    return(
       <Page title="Afghanistan | Countries of the World">
         <Box pt={5}  className={classes.mainbox}>
            <Container>
                <Typography variant="h1">Information of the Afghanistan</Typography>
                <Box pt={5}>
                    <Typography variant="h5">1. Afghanistan is the 37th most populated country in the world.
                    </Typography>
                    <Typography variant="h5">2. Afghanistan has a land area of 652,000 square kilometers or 252,000 square miles.
                    </Typography>
                    <Typography variant="h5">3. Afghanistan became a member of the United Nations in 1946.
                    </Typography>
                    <Typography variant="h5">4. Kabul is the capital of Afghanistan.
                    </Typography>
                    <Typography variant="h5">5. Gardens of Babur is a historical place in Kabul.
                    </Typography>
                    <Typography variant="h5">6. Kabuli Pulao is the national dish of Afghanistan.
                    </Typography>
                    <Typography variant="h5">7. Mirwais Azizi is the richest man in Afghanistan.
                    </Typography>
                    <Typography variant="h5">8. A pig named Khanzir is the only pig in Afghanistan.
                    </Typography>
                    <Typography variant="h5">9. Buzkashi is Afghanistan's national sport.
                    </Typography>
                    <Typography variant="h5">10. Zablon Simintov is the only Jew living in Afghanistan.
                        </Typography>
                </Box>
            </Container>
        </Box>
       </Page>
    );
}
export default Afghanistan;