const progressBar = document.querySelector('.progress-bar')
const fillProgress = document.querySelector('.fill-progress');

// Setting steps and progress bar initial value
let steps = 1, progress = 0;

// Conditions to increase the progress
const progressLength = (step) => {
    switch(step) {
        case 1:
            progress = 0;
            break;
        
        case 2:
            progress = 25;
            break;
        
        case 3:
            progress = 75;
            break;
        
        case 4:
            progress = 100;
            break;
    }
}

// Default state when page loads
if(steps == 1) {
    document.getElementById('previous').style.borderColor = "#d4d4d4";
    document.getElementById('previous').style.backgroundColor = "#d4d4d4";
    document.getElementById('next').style.borderColor = "#3b82f6";
    document.getElementById('next').style.backgroundColor = "#3b82f6";
    document.querySelector('.step-1').style.borderColor = "#4ade80";
    fillProgress.style.width = `${progress}%`;
} 

// Decrement button function
const decrease = () => {
    if(steps > 1) {
        document.querySelector(`.step-${steps}`).style.borderColor = "#d1d5db";
        steps--;
        progressLength(steps);
    }
    console.log(steps, progress);

    if(steps == 1) {
        document.getElementById('previous').style.borderColor = "#d4d4d4";
        document.getElementById('previous').style.backgroundColor = "#d4d4d4";
        document.getElementById('next').style.borderColor = "#3b82f6";
        document.getElementById('next').style.backgroundColor = "#3b82f6";
    } 
    else {
        document.getElementById('previous').style.borderColor = "#3b82f6";
        document.getElementById('previous').style.backgroundColor = "#3b82f6";
    }
    fillProgress.style.width = `${progress}%`;
}

// Increment button function
const increase = () => {
    if(steps < 4) {
        steps++;
        progressLength(steps);
    }
    console.log(steps, progress);

    document.querySelector(`.step-${steps}`).style.borderColor = "#4ade80";

    if(steps == 4) {
        document.getElementById('next').style.borderColor = "#d4d4d4";
        document.getElementById('next').style.backgroundColor = "#d4d4d4";
        document.getElementById('previous').style.borderColor = "#3b82f6";
        document.getElementById('previous').style.backgroundColor = "#3b82f6";
    } else {
        document.getElementById('next').style.borderColor = "#3b82f6";
        document.getElementById('next').style.backgroundColor = "#3b82f6";
    }
    fillProgress.style.width = `${progress}%`;
}