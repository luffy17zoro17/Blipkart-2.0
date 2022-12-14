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
    label: 'Luffy, Foosha Village.',
    imgPath:"https://w0.peakpx.com/wallpaper/961/254/HD-wallpaper-luffy-anime-monkey-d-luffy-one-piece-strawhats-wano-arc-thumbnail.jpg",
    quote: `"Sales compounded the consumer demand which led to a milestone of 150% YoY revenue growth from Blipkart."`,
    name:"Monkey.D.Luffy",
  },
  { 
    id:2,
    label: 'Zoro, Shimotsuki Village.',
    imgPath:"https://w0.peakpx.com/wallpaper/399/672/HD-wallpaper-one-piece-zoro-anime-one-piece-zoro.jpg",
    quote:`"Blipkart helped me expand to 6 categories with 5x growth YoY!"`,
    name:"Roronoa Zoro"
  },
  {
    id:3,
    label: 'Nami, Cocoyasi Village.',
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
    <div className='flex flex-col w-[100%] 
    bg-yellow-300 h-[17rem] mt-[6rem]'>
    <Box sx={{ width: "100%", flexGrow: 1 }}>
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
        <Typography className='bg-orange-400 px-[2vmin] rounded-3xl'>
          {CarousalImages[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className='flex flex-col justify-center items-center z-40
         overflow-hidden w-[100%] h-[22%] mt-[2.9rem] mb-[7rem] sm:mt-[3rem]'>
        {CarousalImages.map((pic) => (
          <div className="flex justify-around h-[18rem] pt-[4rem]" key={pic.id}>
            {Math.abs(activeStep - pic.id) <= 2 ? (
                     
             <div className='flex flex-col px-[15%]'> 
              <div className='w-[20vmin] h-[12vmin]'>
               <Image
                className="object-cover rounded"
                width={1100}
                height={1120}
                layout='responsive'
                src={pic.imgPath}
                alt=""
               />
              </div> 
              <span className=''>
               <p className="italic font-light pl-[22vmin] text-sm">{pic.quote}</p>
               <h1 className='font-semibold fixed top-[10rem] pt-[2vmin]
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
        className='w-[100%] bg-transparent h-[22%] absolute z-10 mt-[7rem]'
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
