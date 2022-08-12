function NextDay(year, month, day){
    // meseci do 30ti: february(2), april(4), june(6), september(9),november(11) 
    let nextday = day + 1;
    let isLeapyear = false;
    let isMonthshort = false;
    if(year < 100){
        year += 1900;
    }
    if( month === 2 || month ===4 || month === 6 || month === 9 || month === 11){
        isMonthshort = true;
    }

    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        isLeapyear = true;
    }

    if(nextday > 28 && month === 2 && isLeapyear === false){
            month++;
            nextday = 1;
    }else if(month === 12 && nextday > 31){
        year++;
        month = 1;
        nextday = 1;
    }else if (nextday > 30 && isMonthshort){
        month++;
        nextday = 1;
    }else if (nextday > 31){
        month++;
        nextday = 1;
    }
    console.log(`${year}-${month}-${nextday}`);
}
NextDay(2016, 9, 30);
NextDay(2020, 3, 24);