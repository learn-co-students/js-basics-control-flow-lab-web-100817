// Write your code in this file!
function scuberGreetingForFeet(number) {
    if (number <= 400) {
      return "This one is on me!";
    } else if (number > 2000 && number < 2500) {
      return 'I will gladly take your thirty bucks.'
    } else if (number > 2500) {
      return 'No can do.'
    }
}

function ternaryCheckCity(city) {
  answer = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return answer;
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
