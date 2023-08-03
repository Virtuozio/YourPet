// import { func } from "prop-types";

export function petAgeCount(date) {
  const age = new Date(Date.now() - Date.parse(date)).getFullYear() - 1970 || 0;
  if (age < 0.3) {
    return '3 month';
  }
  if (age < 0.6) {
    return '6 month';
  }
  if (age < 0.9) {
    return '9 month';
  }
  // if (age < 1) {
  //   return '8 month';
  // }
  else if (age === 1) {
    return '1 year';
  } else if (age > 15) {
    return 'old pet';
  }
  return years[age] + ' years';
}

const years = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
];

export function modalDateFormat(date) {
  return new Date(date).toLocaleDateString();
}
