//ES6 Import syntax. We will go over this later
import {Database} from "../../modules/mock-db";
var db = new Database();

db.find(function(data) {
  console.log(data);
});

function firstPromise(status) {
  let promise = new Promise(function(fulfill,reject) {
    if (status===true) {
      fulfill("The promise is fulfilled.");
    }
    else {
      reject(new Error("The promise is rejected"));
    }
  });
  return promise;
}

// function secondPromise() {
//   let promise = new Promise(function(fulfill,reject) {
//     fulfill({status:true});
//   });
//   return promise;
// }

firstPromise(true).then(function(status) {
  console.log(status);
  // return secondPromise();
}, function(error) {
  console.log(error.message);
})
// .then(function(status) {
//   console.log(status);
// });