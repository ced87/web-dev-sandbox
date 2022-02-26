// const getSleepHours = (day) => {
//   switch (day) {
//     case 'monday':
//       return 8;
//     case 'tuesday':
//       return 8;
//     case 'wednesday':
//       return 8;
//     case 'thursday':
//       return 8;
//     case 'friday':
//       return 8;
//     case 'saturday':
//       return 8;
//     default:
//       return 8;
//   }
// };

const getSleepHours = (
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
) => {
  return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
};

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDept = () => {
  const actualSleepHours = getSleepHours(9, 9, 7, 8, 4.5, 6, 9);
  const idealSleepHours = getIdealSleepHours(7.5);

  if (actualSleepHours === idealSleepHours) {
    return 'You had the perfect amount of sleep. Good job!';
  } else if (actualSleepHours > idealSleepHours) {
    return `You had ${
      actualSleepHours - idealSleepHours
    } hours more sleep than your ideal hours. Not bad!`;
  } else {
    return `You had ${
      idealSleepHours - actualSleepHours
    } hours less sleep than your ideal hours. Get more sleep!`;
  }
};

console.log(calculateSleepDept());
