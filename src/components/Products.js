import React, { Component } from 'react';
import { api_url } from '../utils/const';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      extraData: [],
      page: 1,
      loading: false,
    }
  };

  componentDidMount() {
    const { page } = this.state;
    this.getProducts(page, 40);
  };

  getProducts(page, limit) {
    const { data, extraData} = this.state;
    if(extraData.length){
      this.setState({ data: this.state.data.concat(extraData) });
    }
    this.setState({ page, limit, loading: true });
    fetch(api_url).then(resp => resp.json())
      .then(newData => {
        if (!data.length) {
          let extraData = newData.slice(20);
          newData.length = 20;
          this.setState({ data: newData, extraData, loading: false });
        } else {
          this.setState({ extraData: newData, loading: false });
        }
      }).catch(error => {
        alert('Somenthing went wrong trying to fetch products: ', error.message);
      });
  }

  render () {
    const { data } = this.state;
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
            {data.map((product, index) => {
              if (index && !(index % 20)) {
                return this.renderRows(product, index)
              }
              else {
                return ( 
                  <tr id={index} key={index}>
                    <th scope="row">{ product.id }</th>
                    <td style={{ fontSize: product.size }}>{ product.face }</td>
                    <td>{ product.size }</td>
                    <td>${ product.price/100 }</td>
                    <td>{ product.date }</td>
                  </tr>
                )}
              })
            }
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