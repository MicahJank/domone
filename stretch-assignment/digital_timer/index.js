// grabbing the different digit divs from the dom and assigning them to a variable
const msTensNumber = document.querySelector('#msTens');
const msHundredsNumber = document.querySelector('#msHundreds');
const secondOnesNumber = document.querySelector('#secondOnes');
const secondTensNumber = document.querySelector('#secondTens');

// grab a node list of all the digit classes so i can update their color all at once
const digitList = document.querySelectorAll('.digit');

const timer = () => {
    let msCount = 0;
    let msHundredsCount = 0;
    let secondOnesCount = 0;
    let secondTensCount = 0;

    const countdown = setInterval(() => {
        msTensNumber.textContent = msCount;
        msCount++;
        if (msCount === 10) {
            msCount = 0;
            msTensNumber.textContent = msCount;

            // When the msCount reaches ten we want the msHundredCountDown function to be called. This way
            // The ms in the hundreds place will increment by 1 for every 10 ms in the ones place
            msHundredsCountDown();

            // clearInterval(countdown); // Will stop the countdown  
        }
    }, 10);

    // The functions below each increment their respective number each time they are called. 
    const msHundredsCountDown = () => {
        msHundredsCount++;
        msHundredsNumber.textContent = msHundredsCount;
        
        
        if (msHundredsCount === 10) {
            msHundredsCount = 0;
            msHundredsNumber.textContent = msHundredsCount;

            secondOnesCountDown();
            
        }
    };

    const secondOnesCountDown = () => {
        secondOnesCount++;
        secondOnesNumber.textContent = secondOnesCount;
        
        
        if (secondOnesCount === 10) {
            secondOnesCount = 0;
            secondOnesNumber.textContent = secondOnesCount;
            secondTensCountDown();
        }
    };

    // Since this is the last number to be incremented it is only called once since the timer needs to stop
    // once we reach 10
    const secondTensCountDown = () => {
        secondTensCount++;
        secondTensNumber.textContent = secondTensCount;
        
        if (secondTensCount === 1) {
            clearInterval(countdown);
            digitList.forEach(element => element.style.color = 'red');
        }
    };

};
