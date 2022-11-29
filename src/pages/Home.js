import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const Home = () => {

    const style = {
        img: {
            height: '300px',
            width: '300px',
            objectFit: 'cover',
            borderRadius: '10px'
        },
        items: {
            display: 'flex',
            justifyContent: 'space-around',
            width: 200,
            height: 200,
            // backgroundColor: 'red',
            backgroundImage: "https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg",
            padding: '1em'

        },
        txt: {
            padding: '1em'
        }
    }
    return (
        <div>
            <Typography variant="h2" style={style.txt}> Choose your loved brand </Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: 'flex', justifyContent: 'space-around' }} >
                <Grid item style={style.items} >
                    <Box>
                        <img src={"https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"} style={style.img}>
                        </img>
                    </Box>
                </Grid>
                <Grid item style={style.items} >
                    <Box>
                        <img src={"https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"} style={style.img}></img>
                    </Box>
                </Grid><Grid item style={style.items} >
                    <Box>
                        <img src={"https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"} style={style.img}></img>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}


export default Home;