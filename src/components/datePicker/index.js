import React from 'react';
import {DatePickerAndroid} from 'react-native';

export const DatePicker = async () => {
  const datePicked = await DatePickerAndroid.open({
    date: new Date(),
  });

  return datePicked.day
    ? new Date(datePicked.year, datePicked.month, datePicked.day)
    : '';
};
