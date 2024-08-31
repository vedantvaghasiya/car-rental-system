let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true

})
sr.reveal('.text',{delay:200, origin:'top'})
sr.reveal('.form-container form',{delay:300, origin:'left'})
sr.reveal('.heading',{delay:300, origin:'top'})
sr.reveal('.ride-container .box',{delay:200, origin:'top'})
sr.reveal('.services-container .box',{delay:200, origin:'top'})
sr.reveal('.about-container .box',{delay:200, origin:'top'})
sr.reveal('.reviews-container',{delay:200, origin:'top'})
sr.reveal('.FAQs-container',{delay:200, origin:'top'})


// import { log } from 'console';
// import { MongoClient } from 'mongodb';

// let exportToExcel = document.querySelector('#excel');

//  exportToExcel.onclick = () => {
//     console.log
//   MongoClient.connect('mongodb://127.0.0.1:27017/Car-Rental', function(err, db) {
//     if (err) throw err;

//     var collection = db.collection('cardbs');
//     collection.find().toArray(function(err, data) {
//       if (err) throw err;
//       var workbook = XLSX.utils.book_new();
//       var sheet = XLSX.utils.json_to_sheet(data);
//       XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');
//       XLSX.writeFile(workbook, 'data.xlsx');
//       db.close();
//     });
//   });
// }