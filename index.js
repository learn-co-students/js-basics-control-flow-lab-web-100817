// Write your code in this file!

function scuberGreetingForFeet(feet) {
  let scuberGreeting;
  if (feet <= 400) {
    scuberGreeting = 'This one is on me!';
  } else if (feet <= 2000) {
    scuberGreteting = 'That will be 20 bucks.';
  } else if (feet > 2000 && feet <= 2500 ){
    scuberGreeting = 'I will gladly take your thirty bucks.';
  } else {
    scuberGreeting = 'No can do.';
  }
  return scuberGreeting;
}

function ternaryCheckCity(city) {
  let response;
  if (city === 'NYC') {
    response = 'Ok, sounds good.';
  } else {
    response = 'No go.';
  }
  return response;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}
