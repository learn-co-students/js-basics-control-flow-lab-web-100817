// Write your code in this file!

function scuberGreetingForFeet(value) {
  if (value <= 400) {
    return 'This one is on me!'
  } else if (value > 2000 && value <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (value > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  let answer;
  city === 'NYC' ? answer = 'Ok, sounds good.' : answer = 'No go.';
  return answer;
}

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
}