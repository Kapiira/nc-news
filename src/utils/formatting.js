import moment from 'moment';

const dateFormat = 'DD-MM-YYYY';

export const dateFormatting = (array, keyDate) => {
  const formattedArr = array.map((item) => {
    item[keyDate] = moment(item[keyDate]).format(dateFormat);
    return item;
  });
  return formattedArr;
};
