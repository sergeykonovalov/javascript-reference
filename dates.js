// const now = new Date();
// console.log(now.toString());
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
//
// const timestamp = now.getTime();
// const newDate = new Date(timestamp);
// console.log(newDate.getFullYear());

const moment = require('moment');
const now = moment();
now.add(1, 'year').subtract(20, 'days');
console.log(now.format('MMMM Do, YYYY'));
console.log(now.fromNow());

const nowTimestamp = now.valueOf();
console.log(moment(nowTimestamp).toString());

const birthday = moment();
birthday.year(1982).month(8).date(31);
console.log(birthday.format('MMM D, YYYY'));