const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Please enter rock, paper, scissors');
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Player wins! Not suspicious at all...';
  }

  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Paper covers rock. Computer wins!';
    } else {
      return 'Rock destroys scissors. Player wins!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Scissors cut paper. Computer wins!';
    } else {
      return 'Paper covers rock. Player wins!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Rock destroys scissors. Computer wins!';
    } else {
      return 'Scissors cut paper. Player wins!';
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
