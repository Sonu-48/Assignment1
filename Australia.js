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

function Australia()
{
    const classes = useStyles();
    return(
       <Page title ="Australia | Countries of the World">
         <Box pt={5} className={classes.mainbox}>
            <Container>
                <Typography variant="h1">Information of the Australia</Typography>
                <Box pt={5}>
                    <Typography variant="h5">1.  Kangaroos only exist in Australia.</Typography>
                    <Typography variant="h5">2. The Great Barrier Reef in Australia is the biggest reef system in the world.</Typography>
                    <Typography variant="h5">3.  Australia was ‘discovered’ by European explorers in the 17th Century.</Typography>
                    <Typography variant="h5">4. Indigenous Australians have lived on the continent for over 65,000 years.</Typography>
                    <Typography variant="h5">5.  Due to climate change, Australia is suffering from many bush fires.</Typography>
                    <Typography variant="h5">6. Tasmania is part of the continent of Australia.</Typography>
                    <Typography variant="h5">7. Australia is home to some dangerous animals.</Typography>
                    <Typography variant="h5">8. Australia is split into 8 states</Typography>
                    <Typography variant="h5">9. The Capital of Australia is Canberra.</Typography>
                    <Typography variant="h5">10.  Australia is a continent and a country.</Typography>
                </Box>
            </Container>
        </Box>
       </Page>
    );
}
export default Australia;