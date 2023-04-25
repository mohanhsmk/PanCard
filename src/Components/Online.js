import React, { useEffect } from 'react'
import "./App.css"
import img from "../images/logo_light.png"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Data3,Data4} from "../Components/data"
import FirstPage from "../Components/FirstPage";
import SecondPage from '../Components/SecondPage';
import Thirdpage from '../Components/Thirdpage';
import Fourthpage from '../Components/Fourthpage';
import Fifthpage from '../Components/fifthpage';

const Online = () => {
  
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});

    const steps = ['Guidelines', 'Personal Details', 'Contact and Other Details','AO Code','Document Details'];


    const totalSteps = () => {
      return steps.length;
    };
  
    const completedSteps = () => {
      return Object.keys(completed).length;
    };

    const allStepsCompleted = () => {
      return completedSteps() === totalSteps();
    };
  
    const handleStep = (step) => () => {
      setActiveStep(step);
    };
  
    // const handleComplete = () => {
    //   const newCompleted = completed;
    //   newCompleted[activeStep] = true;
    //   setCompleted(newCompleted);
    //   handleNext();
    // };
  
    const handleReset = () => {
      setActiveStep(0);
      setCompleted({});
    };
  return (
    <>
    <div className='hhh'>
    <div className='hhh-img'>
      <img src={img} alt="img" />
      </div>
   </div>

   <div className='container p-5'>
        <h4>Online PAN application</h4>
        <p>Application Type: New PAN - Indian Citizen (Form 49A)<br></br>Category: INDIVIDUAL</p><br></br>
        <hr style={{color:"blue",fontSize:"30px"}}></hr>  
   </div>
     <div className='container p-5'>
     <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
              {activeStep === 0 && <FirstPage/>}<br></br><br></br>
              {activeStep === 1 && <SecondPage/>}
              {activeStep === 2 && <Thirdpage/>}
              {activeStep === 3 && <Fourthpage/>}
              {activeStep === 4 && <Fifthpage/>}
            {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box> */}
          </React.Fragment>
        )}
      </div>
    </Box>
     </div>
     
   </>
  )
}

export default Online;



