const getUserChoice = userInput => {
    userInput=userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' ){
      return userInput;
    } else {
      console.log('Please enter valid weapon choice. \n Rock, Paper or Scissors are allowed.')
    }
  }
  
  const getComputerChoice =()=> {
    let choice=Math.floor(Math.random()*3);
    console.log(choice);
    switch(choice){
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
    }
  }
  
  const determineWinner=(humanWeapon, computerWeapon)=>{
    if(humanWeapon === computerWeapon){
      console.log(`Human: ${humanWeapon} vs CPU: ${computerWeapon}! \n It's a tie, go again!\n`);
      determineWinner(humanWeapon,computerWeapon);
    } else if (humanWeapon==="rock" && computerWeapon === "scissors") {
      console.log(`Human: ${humanWeapon} vs CPU: ${computerWeapon}! \n Human Wins!`)
    } else if (humanWeapon==="scissors" && computerWeapon === "paper"){
      console.log(`Human: ${humanWeapon} vs CPU: ${computerWeapon}! \n Human Wins!`)
    } else if (humanWeapon==="paper" && computerWeapon === "rock"){
      console.log(`Human: ${humanWeapon} vs CPU: ${computerWeapon}! \n Human Wins!`)
    } else {
      console.log(`Human: ${humanWeapon} vs CPU: ${computerWeapon}! \n Computer Wins!`)
    }
  }
  
  const playGame=()=>{
    const userChoice=getUserChoice('rock');
    const computerChoice=getComputerChoice();
    determineWinner(userChoice,getComputerChoice);
  }
  
  playGame();