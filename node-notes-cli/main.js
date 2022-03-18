const fs = require('fs');
const jsonFile = require('./data.json');

const command = process.argv[2];
const content = process.argv[3];
const update = process.argv[4];

if (command === 'read') {
  for (const values in jsonFile.notes) {
    console.log(`${values}: ${jsonFile.notes[values]}`);
  }
} else if (command === 'add') {
  jsonFile.notes[jsonFile.nextId] = content;
  jsonFile.nextId++;
  write(jsonFile);
} else if (command === 'delete') {
  delete jsonFile.notes[content];
  write(jsonFile);
} else if (command === 'update') {
  jsonFile.notes[content] = update;
  write(jsonFile);
} else {
  console.log('please use a valid method');
}

function write(data) {
  const text = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', text, err => {
    if (err) throw err;
  });
}
