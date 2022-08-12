function vacation(numberOfParticipents, groupType, dayOfWeek) {
  let studentsFriday = 8.45;
  let studentsSaturday = 9.8;
  let studentsSunday = 10.46;

  let businessFriday = 10.9;
  let businessSaturday = 15.6;
  let businessSunday = 16;

  let regularFriday = 15;
  let regularSaturday = 20;
  let regularSunday = 22.5;
  let totalPrice = 0;
  let discount = 0;
  let finalPrice = 0;
  switch (groupType) {
    case "Students":
      switch (dayOfWeek) {
        case "Friday":
          totalPrice = numberOfParticipents * studentsFriday;
          break;
        case "Saturday":
          totalPrice = numberOfParticipents * studentsSaturday;
          break;
        case "Sunday":
          totalPrice = numberOfParticipents * studentsSunday;
          break;
      }
      break;
    case "Business":
      switch (dayOfWeek) {
        case "Friday":
          totalPrice = numberOfParticipents * businessFriday;
          break;
        case "Saturday":
          totalPrice = numberOfParticipents * businessSaturday;
          break;
        case "Sunday":
          totalPrice = numberOfParticipents * businessSunday;
          break;
      }
      break;
    case "Regular":
      switch (dayOfWeek) {
        case "Friday":
          totalPrice = numberOfParticipents * regularFriday;
          break;
        case "Saturday":
          totalPrice = numberOfParticipents * regularSaturday;
          break;
        case "Sunday":
          totalPrice = numberOfParticipents * regularSunday;
          break;
      }
      break;
  }
  if (groupType === "Students" && numberOfParticipents >= 30) {
    discount = 0.15;
    finalPrice = totalPrice - totalPrice * discount;
  } else if (groupType === "Business" && numberOfParticipents >= 100) {
    discount = 0.1;
    finalPrice = totalPrice - totalPrice * discount;
  } else if (
    groupType === "Regular" &&
    numberOfParticipents >= 10 &&
    numberOfParticipents <= 20
  ) {
    discount = 0.05;
    finalPrice = totalPrice - totalPrice * discount;
  }else{
      finalPrice = totalPrice;
  }
  console.log(`Total price: ${finalPrice.toFixed(2)}`);
}


vacation(100, "Business", "Saturday");
