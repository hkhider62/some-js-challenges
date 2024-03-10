//first challenge
let message = "there is no war in ba Sing Se";

function counting(words){
    
    console.log(words.split(' ').length);

}

// challenge two

let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capitals = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];

// Check if the arrays have the same length
if (countries.length === capitals.length) {
    for (let i = 0; i < countries.length; i++) {
        console.log(`Your country: ${countries[i]} has the capital named: ${capitals[i]}.`);
    }
} else {
    console.log('Error: The number of countries and capitals do not match.');
}

// challenge three


let randomizer = Math.floor(Math.random() * 4);

let fate;

switch (randomizer) {
    case 0:
        fate = "A certain victory";
        break;
    case 1:
        fate = "Not so certain victory";
        break;
    case 2:
        fate = "An uneasy victory";
        break;
    default:
        fate = "Your fate is unclear, ô chosen undead";
}

console.log(fate);

// challenge four 

function checkSeason(month) {
    // Convert the month to lowercase to handle case variations
    const lowerCaseMonth = month.toLowerCase();

    // Check the season based on the month
    switch (lowerCaseMonth) {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month';
    }
}

