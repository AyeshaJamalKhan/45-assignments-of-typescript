let numbers:number[]=[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

numbers.forEach(number => {
  let ordinalNumber = "th";
    if(number === 1){
      ordinalNumber = "st";
    }
    else if(number === 2){
      ordinalNumber = "nd";
    }
    else if(number === 3){
      ordinalNumber = "rd";
    }
    else if(number === 4){
      ordinalNumber = "th";
    }
    else if(number === 5){
      ordinalNumber = "th";
    }
    else if(number === 6){
      ordinalNumber = "th";
    }
    else if(number === 7){
      ordinalNumber = "th";
    }
    else if(number === 8){
      ordinalNumber = "th";
    }
    else if(number === 9){
      ordinalNumber = "th";
    }
    console.log(`${number}${ordinalNumber}`);
});