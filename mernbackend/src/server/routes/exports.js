// export.js
const XLSX = require('xlsx');
const MongoClient = require('mongodb').MongoClient;

function exportToExcel() {
  MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
    if (err) throw err;
    var collection = db.collection('mycollection');
    collection.find().toArray(function(err, data) {
      if (err) throw err;
      var workbook = XLSX.utils.book_new();
      var sheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');
      XLSX.writeFile(workbook, 'data.xlsx');
      db.close();
    });
  });
}
