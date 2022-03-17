const fs = require('fs');
const jsonFile = require('./data.json');

const command = process.argv[2];
const content = process.argv[3];

if (command === 'read') {
  for (const values in jsonFile.notes) {
    console.log(`${values}: ${jsonFile.notes[values]}`);
  }
} else if (command === 'add') {
  jsonFile.notes[jsonFile.nextId] = content;
  jsonFile.nextId++;
  write(jsonFile);
}

function write(data) {
  const text = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', text, err => {
    if (err) throw err;
  });
}
