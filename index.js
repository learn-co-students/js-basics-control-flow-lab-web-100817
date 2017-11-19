// Write your code in this file!

function scuberGreetingForFeet (n) {
	if (n < 400) {
		return 'This one is on me!'
	} else if (n > 2500) {
		return 'No can do.'
	} else if (n > 2000) {
		return 'I will gladly take your thirty bucks.'
	}
};

function ternaryCheckCity (n) {
	return n === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

function switchOnCharmFromTip (n) {
	switch (n) {
		case 'generous':
			return 'Thank you so much.';
		case 'not as generous':
			return 'Thank you.';
		default:
			return 'Bye.';
	}
};
