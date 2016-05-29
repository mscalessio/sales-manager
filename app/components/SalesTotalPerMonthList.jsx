var React = require('react');

var SalesTotalPerMonthList = React.createClass({
  render: function () {
    var {salesTotalMonth} = this.props;
    var renderSalesManData = () => {
      return salesTotalMonth.map( single =>
        <li key={single.id}>Month: {single.month} - Sales: {single.sales}</li>
      );
    };

    return (
      <div className="col-md-6">
        <ul>
          {renderSalesManData()}
        </ul>
      </div>
    )
  }
});

module.exports = SalesTotalPerMonthList;
