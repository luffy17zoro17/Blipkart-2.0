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
    label: 'BLACK FRIDAY SALE!',
    imgPath:'https://images.pexels.com/photos/5632386/pexels-photo-5632386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },  
  {
    label: 'Limited time offer',
    imgPath:"https://images.unsplash.com/photo-1611403570720-162d8829689a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
  },
  {
    label: '50% OFF',
    imgPath:"https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },  

  {
    label: 'CYBER MONDAY SALE!',
    imgPath:"https://images.pexels.com/photos/5632369/pexels-photo-5632369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }  
 
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
    <Box className='mx-[1%] mt-[4.9rem] relative xl:mx-[5.6%]'>
    <div className="">
      
      <div className="
           mx-2 my-4">    
            <div className="z-10 top-0 absolute shadow-md
             shadow-black">
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
                  <h1 className="pr-5 pt-3 p-4 -ml-4
                   bg-orange-400">
                    <Typography className='font-semibold'>
                      {images[activeStep].label}
                    </Typography>
                  </h1>
              </Paper>
            </div>

           
            <div className="w-[100%] flex justify-center bottom-0 absolute z-10">
              <MobileStepper
                        steps={maxSteps}
                        position="static"
                        className='bg-yellow-300 rounded-t-xl border-4 border-black bottom-0'
                        activeStep={activeStep}
                        nextButton={  
                            
                      <div className="">    
                        <Button className="absolute right-[7%] mt-[-9rem] 
                        shadow-md shadow-black
                        rounded-tr-lg hover:bg-pink-300 hover:text-green-300
                        rounded-br-lg bg-pink-500 border-4
                        bg-gradient-to-b from-yellow-300" size="large" onClick={handleNext}> 
                            {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                            ) : (
                            <KeyboardArrowRight />
                            )}
                        </Button> 
                      </div>  
                    
                        }
                        backButton={ 
                      
                      <div className="">    
                        <Button className="absolute left-[7%] mt-[-9rem]
                        shadow-md shadow-black
                        rounded-tl-lg hover:bg-pink-300 hover:text-green-300
                        rounded-bl-lg bg-pink-500 border-4 
                        bg-gradient-to-b from-yellow-300" size="large" onClick={handleBack}>
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
          

            <div className="z-[-20]">
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? ( 
                       
                        <div className="relative 
                        h-[19rem]">
                        <Image
                           layout="fill"
                            className='object-cover'               
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
