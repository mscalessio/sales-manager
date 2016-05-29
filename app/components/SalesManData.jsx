var React = require('react');

var SalesManData = React.createClass({
  render: function () {
    var {name, sales} = this.props;
    return (
      <div>
        <p>Name: {name} - Sales: {sales}</p>
      </div>
    )
  }
});

module.exports = SalesManData;
