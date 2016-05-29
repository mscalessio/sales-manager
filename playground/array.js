var uuid = require('node-uuid');

var reactArr = [
  {
    id: uuid(),
    username: 'Mao',
    sales: 0
  }, {
    id: uuid(),
    username: 'Angeline',
    sales: 0
  }, {
    id: uuid(),
    username: 'Gerardo',
    sales: 0
  }, {
    id: uuid(),
    username: 'Nicki',
    sales: 0
  }, {
    id: uuid(),
    username: 'test',
    sales: 0
  }
];

var cubes = [
  ["Oswaldo", "51107"],
  ["Mao", "25449"],
  ["Angeline", "11160"],
  ["Gerardo", "48826"],
  ["Nicki", "47768"],
  ["Test", "42023"]
];

var lastYear = [
  ["JAN","631541"],
  ["FEB","1367103"],
  ["MAR","511971"],
  ["APR","1145695"],
  ["MAY","1314884"],
  ["JUN","1036486"],
  ["JUL","1217946"],
  ["AUG","1339755"],
  ["SEP","1307548"],
  ["OCT","1268404"],
  ["NOV","686447"],
  ["DEC","1344027"]
];

function arrToObj(firstPar, secondPar, oldArr) {
  var newArr = [];
  for(var i = 0; i < oldArr.length; i++) {
    var newObj = {};
    newObj.id = i;
    newObj[firstPar] = oldArr[i][0];
      for(var j = 0; j < oldArr[i].length; j++) {
        newObj[secondPar] = oldArr[i][1];
      }
      newArr.push(newObj);
  }
  return newArr;
}

var newLastYearData = arrToObj('month', 'sales', lastYear);
console.log(newLastYearData);

var salesPerMan = arrToObj('name', 'sales', cubes);
console.log(salesPerMan);

// var sales = [];
// for(var i = 0; i < cubes.length; i++) {
//   var person = {};
//   person.id = uuid();
//   person.name = cubes[i][0];
//     for(var j = 0; j < cubes[i].length; j++) {
//       person.sales = cubes[i][1];
//     }
//     sales.push(person);
// }






// console.log(reactArr);
//
// var newArr = new Map(arrArr);
// console.log(newArr);
