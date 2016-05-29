var axios = require('axios');
var uuid = require('node-uuid');

const BACKEND_URL = 'http://localhost:8080/';

// 70a5cb679ed84241a5c11c47bf2a11ea

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

module.exports = {
  salesManData: function (session) {
    var currentSession = '3966a47c721440a986b199010c455b0a';
    var requestUrl = `${BACKEND_URL}salesmandata?sessionid=${currentSession}`;

    return axios.get(requestUrl).then(function (res) {
      if (!res.data && res.data.resultDescription !== 'SUCCESS') {
        throw new Error(res.resultDescription);
      } else {
        var sales = arrToObj('name', 'sales', res.data.data);
        return sales
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  },
  lastYearData: function (session) {
    var currentSession = '3966a47c721440a986b199010c455b0a';
    var requestUrl = `${BACKEND_URL}lastyeardata?sessionid=${currentSession}`;

    return axios.get(requestUrl).then(function (res) {
      if (!res.data && res.data.resultDescription !== 'SUCCESS') {
        throw new Error(res.resultDescription);
      } else {
        var salesPerMonth = arrToObj('month', 'sales', res.data.data);
        return salesPerMonth;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
