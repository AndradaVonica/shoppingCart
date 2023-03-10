import { useState, useEffect } from "react"
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';



const Home = () => {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [productSwipe, setProductSwipe] = useState([])
    const maxSteps = productSwipe.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('products.json')
            const jsonData = await data.json()
            const parsedData = jsonData.map((product) => ({ label: product.description, imgPath: product.imageURL }))
            setProductSwipe(parsedData)
            console.log(parsedData)

        }
        fetchData()
    }, [])

    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }} >
            {/* <Typography variant="h2" style={style.txt}> Choose your loved brand </Typography>
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
            </Grid> */}

            <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default'
                    }}
                >
                    {/* <Typography >{productSwipe[activeStep].label}</Typography> */}
                </Paper>
                <AutoPlaySwipeableViews
                    // style={{ display: "flex", backgroundColor: "yellow" }}

                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {productSwipe.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 700,
                                        display: 'block',
                                        maxWidth: 1000,
                                        overflow: 'hidden',
                                        width: "100%",
                                        objectFit: "contain"

                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    style={{ display: "flex", backgroundColor: "red" }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
            Back
          </Button>
                    }
                />
            </Box>
        </div>
    )
}


export default Home;