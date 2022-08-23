import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1542992015-4a0b729b1385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://cdn.pixabay.com/photo/2020/11/18/20/18/black-friday-5756633_960_720.png',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://cdn.pixabay.com/photo/2019/11/27/17/41/black-friday-4657478_960_720.jpg',
  },
];



const ImageSlideShow=()=> {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if(activeStep === maxSteps-1){
        setActiveStep(0)
    }else{
     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {

    if(activeStep === 0){
        setActiveStep(maxSteps-1)
    } else {
     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box>
    <div className="relative">
      
      <div className="relative border-0
           border-red-600 mx-2 my-4">


          
            <div className="absolute z-10 top-0">
              <Paper
                    square
                    elevation={0}
                    sx={{
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                    }}
                >
                  <h1 className="pr-5 pt-3 p-4 -ml-4 bg-orange-400">
                    <Typography>
                      {images[activeStep].label}
                    </Typography>
                  </h1>
              </Paper>
            </div>

                     
            <div className="flex flex-col justify-center
              items-center">
             <div className="absolute bottom-0 z-20">
              <MobileStepper
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
              />
             </div> 
            </div>

            <div className="flex justify-center flex-col 
             items-center">
              <div className="absolute border-4 w-[90%]
                top-[40%]">
              <MobileStepper
                        steps={maxSteps}
                        position="static"
                        display="block"
                        activeStep={activeStep}
                        nextButton={  
                            
                      <div className="z-30 border rounded-tr-lg
                      rounded-br-lg bg-black">    
                        <Button className="" size="large" onClick={handleNext}> 
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button> 
                      </div>  
                    
                        }
                        backButton={ 
                      
                      <div className="z-30 border rounded-tl-lg
                        rounded-bl-lg bg-black">    
                        <Button className="" size="large" onClick={handleBack}>
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                            ) : (
                            <KeyboardArrowLeft />
                            )}
                          
                        </Button>
                      </div>                   
                        }
              />
              </div>
            </div>

            <div className="relative">
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? ( 
                       
                        <div className="relative max-w-[95.5rem] h-[20rem]">
                        <Image
                           
                            display="block"
                            layout="fill"
                            component="Image"
                            src={step.imgPath}
                            alt={step.label}
                        />
                        </div>
                       
                    ) : null}
                </div>
                ))}  
            </AutoPlaySwipeableViews>
            </div>
    </div>
    
  </div>     
  </Box>    
)};


export default ImageSlideShow;
