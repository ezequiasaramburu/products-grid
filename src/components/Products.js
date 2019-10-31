import React, { Component } from 'react';

class Products extends Component {
  constructor(props) {
    super(props);
  };

  render () {
    return (
      <div>
        <div className="table-responsive-sm">
          <table className="table table-striped table-bordered" style={styles.table}>
            <thead style={styles.tableHead}>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Product</th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Products;

const styles = {
  table: {
    textAlign: 'center'
  },
  tableHead: {
    background: '#464e61'
  }
}