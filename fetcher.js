const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('Error', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.log('HTTP Error:', response.statusCode);
    return;
  }
  fs.writeFile(filePath, body, (err) => {
    if (err) {
      console.log('Error:', err);
      return;
    }
    const fileSize = fs.statSync(filePath).size;
    console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
  });
});