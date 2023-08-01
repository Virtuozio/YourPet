export const convertDateFormat = inputDate => {
  // Розділити рік, місяць та день
  const [year, month, day] = inputDate.slice(0, 10).split('-');

  // Зібрати їх у форматі "дд/мм/рррр"
  const outputDate = `${day}/${month}/${year}`;

  return outputDate;
};
