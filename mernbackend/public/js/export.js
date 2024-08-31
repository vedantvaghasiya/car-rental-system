const MongoClient = require('mongodb').MongoClient;
const XLSX = require('xlsx');
const ejs = require('ejs');
const fs = require('fs');

const url = 'mongodb://localhost:27017';
const dbName = 'Car-Rental';
const collectionName = 'cardbs';

MongoClient.connect(url, function(err, client) {
  if (err) throw err;

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.find({}).toArray(function(err, result) {
    if (err) throw err;

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(result);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    const data = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' }).toString('base64');

    ejs.renderFile('template.ejs', { data }, function(err, html) {
      if (err) throw err;

      fs.writeFile('output.xlsx.html', html, function(err) {
        if (err) throw err;

        console.log('Excel file created successfully!');
        client.close();
      });
    });
  });
});
