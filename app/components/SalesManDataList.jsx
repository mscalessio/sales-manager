var React = require('react');

var SalesManDataList = React.createClass({
  render: function () {
    var {salesManData} = this.props;
    var renderSalesManData = () => {
      return salesManData.map( single =>
        <li key={single.id}>Name: {single.name} - Sales: {single.sales}</li>
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

module.exports = SalesManDataList;
