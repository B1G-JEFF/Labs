const dayjs = require('dayjs');

const date = dayjs('2000/2/23')
const entryTime = dayjs(date).add(8,"hour").add(45,"minutes")

const formattedDate = date.format('DD/MM/YYYY');
const formattedEntryTime = entryTime.format('DD/MM/YYYY HH:mm:ss');

console.log(entryTime.toISOString());
console.log(formattedEntryTime);

console.log(date.toISOString())
console.log(formattedDate);
