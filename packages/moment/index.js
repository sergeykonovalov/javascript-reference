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