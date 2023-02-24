const dayjs = require('dayjs');

const date = dayjs('2000/2/23');
const entryTime = dayjs(date).add(8,"hour").add(45,"minutes")

const seila = dayjs("2001-01-13T01:22:00.000Z")
const formattedDate = date.format('DD/MM/YYYY HH:mm:ss');
const formattedEntryTime = seila.format('DD/MM/YYYY HH:mm:ss');

console.log(entryTime.toISOString());
console.log(formattedEntryTime);

console.log(date.toISOString())
console.log(formattedDate);
