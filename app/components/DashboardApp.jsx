var React = require('react');
var api = require('backend');
var SalesManDataList = require('SalesManDataList');
var SalesTotalPerMonthList = require('SalesTotalPerMonthList');
var uuid = require('node-uuid');

var Dashboard = React.createClass ({
  getInitialState: function() {
    return {
      salesManData: [
        {
          id: '',
          username: '',
          sales: 0
        }
      ],
      salesTotalMonth: [
        {
          id: '',
          month: '',
          sales: 0
        }
      ]
    };
  },
  componentDidMount: function() {
    var that = this;
    api.salesManData().then(function (data) {
      var newArr = data;
      that.setState({
        salesManData: [
          ...data
        ]
      });
    }, function (e) {
      alert(e)
    });
    api.lastYearData().then(function (data) {
      var newArr = data;
      debugger;
      that.setState({
        salesTotalMonth: [
          ...data
        ]
      });
    }, function (e) {
      alert(e)
    });
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function () {
    var {salesManData} = this.state;
    var {salesTotalMonth} = this.state;
    return (
      <div>
        <h2>Dashboard.jsx Rendered</h2>
        <div className="row">
          <SalesManDataList salesManData={salesManData}/>
          <SalesTotalPerMonthList salesTotalMonth={salesTotalMonth}/>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
