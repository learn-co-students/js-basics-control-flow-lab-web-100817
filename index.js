// Write your code in this file!
// const scuberGreetingForFeet = "yes";

const free = "This one is on me!";
const charge = 'I will gladly take your thirty bucks.';
let mess;

// function scuberGreetingForFeet(dist) {
//   if (dist <= 400) {
//     // return free;
//     mess = "This one is on me!";
//   } else if (dist > 2000 && dist < 2500){
//     // return charge;
//     mess = 'I will gladly take your thirty bucks.';
//   } else if (dist >= 2500){
//     mess = 'No can do.';
//   }
//   return mess;
// }

function ternaryCheckCity(city) {
  let cit;
  city === "NYC" ? cit = "Ok, sounds good." : cit = "No go.";
  return cit;
}

function switchOnCharmFromTip(tip) {
  if (tip === 'generous') {
    return 'Thank you so much.';
  } else if (tip === 'not as generous'){
    return 'Thank you.';
  } else {
    return 'Bye.';
  }
}

function scuberGreetingForFeet(dist) {
  switch (true) {
    case (dist <= 400):
      mess = "This one is on me!";
      break;
    case (dist > 2000 && dist < 2500):
      mess = 'I will gladly take your thirty bucks.';
      break;
    case (dist >= 2500):
      mess = 'No can do.';
      break;
  }
  return mess;
}
