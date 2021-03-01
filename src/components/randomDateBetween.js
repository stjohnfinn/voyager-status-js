function getMaxDays(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
        default:
            return 28
    }
}

function randomDateBetween(start, end) {

    let randYear = Math.floor( getRandomBetween(start.year, end.year) );
    let randMonth;
    let randDay;

    if (randYear === start.year) {
        randMonth = Math.floor( getRandomBetween(start.month, 12) );
    } else if (randYear === end.year) {
        randMonth = Math.floor( getRandomBetween(0, end.month) );
    } else {
        randMonth = Math.floor( getRandomBetween(0, 12) );
    }

    if (randMonth === start.month) {
        randDay = Math.floor( getRandomBetween(start.month, getMaxDays(start.month)) );
    } else if (randMonth === end.month) {
        randDay = Math.floor( getRandomBetween(0, getMaxDays(end.month)) );
    } else {
        randDay = Math.floor( getRandomBetween(0, 28) );
    }

    randDay = randDay === 0 ? 1 : randDay;
    randMonth = randMonth === 0 ? 1 : randMonth;

    return {
        year: randYear,
        month: randMonth,
        day: randDay
    };

}

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

export default randomDateBetween;