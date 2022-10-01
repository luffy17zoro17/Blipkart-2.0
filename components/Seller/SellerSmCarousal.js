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
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);















const CarousalImages = [
  {
    id:1,
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:"https://w0.peakpx.com/wallpaper/961/254/HD-wallpaper-luffy-anime-monkey-d-luffy-one-piece-strawhats-wano-arc-thumbnail.jpg",
    quote: `"Sales compounded the consumer demand which led to a milestone of 150% YoY revenue growth from Blipkart."`,
    name:"Monkey.D.Luffy",
  },
  { 
    id:2,
    label: 'Bird',
    imgPath:"https://w0.peakpx.com/wallpaper/399/672/HD-wallpaper-one-piece-zoro-anime-one-piece-zoro.jpg",
    quote:`"Blipkart helped me expand to 6 categories with 5x growth YoY!"`,
    name:"Roronoa Zoro"
  },
  {
    id:3,
    label: 'Bali, Indonesia',
    imgPath:"https://w0.peakpx.com/wallpaper/155/429/HD-wallpaper-nami-anime-manga-one-piece-thumbnail.jpg",
    quote:`"With Blipkart, we went from Rs.10,000 to Rs.5 Cr in sales per annum!"`,
    name:"Nami",
  } 
];




function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = CarousalImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (id) => {
    setActiveStep(id);
  };

  return (
    <div className='static bg-yellow-300 h-[17rem]'>
    <Box sx={{ width: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{CarousalImages[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className='flex flex-col justify-center items-center absolute z-10
         overflow-hidden w-[100%] h-[22%] mt-[2.9rem] mb-[7rem] sm:mt-[3rem]'>
        {CarousalImages.map((pic) => (
          <div className="flex justify-around h-[18rem] pt-[4rem]" key={pic.id}>
            {Math.abs(activeStep - pic.id) <= 2 ? (
                     
             <div className='flex w-[20rem] h-[12rem]'> 
              <div className='mr-[1rem]'>
               <Image
                className="object-cover rounded"
                width={100}
                height={120}
                layout='fixed'
                src={pic.imgPath}
               />
              </div> 
              <span className=''>
               <p className="italic font-light text-sm">{pic.quote}</p>
               <h1 className='font-semibold fixed top-[10rem] flex
                w-[18%]'>
                {pic.name}
               </h1>
              </span> 
             </div>
        
             
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        className='w-screen bg-transparent h-[22%] absolute z-10 mt-[7rem]'
        activeStep={activeStep}
        nextButton={
        
          <Button
            size="large"
            className='mb-[11rem]'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        
        }
        backButton={
          <Button className="mb-[11rem]" 
          size="large" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
