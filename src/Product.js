import { Component } from "react";
import Header from "./Header";

export default class Product extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="row">
            <div className="col-12">
              <h1 className="alert-success">Product Page</h1>
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                {this.props.products == "" ? (
                  <button class="btn btn-primary" type="button" disabled>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Catagory</th>
                      <th>Brand</th>
                    </tr>
                  </thead>
                  <tbody>
                  {console.log(this.props.products)}
                    {this.props.products.map((ob, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={"data:image/png;base64," + ob.prod_image}
                            alt=""
                            width={100}
                            height={100}
                          />
                        </td>
                        <td>{ob.prod_name}</td>
                        <td>{ob.prod_price}</td>
                        <td>{this.props.catagory1.map(ob1=>ob.prod_cate==ob1._id?ob1.cate_name:'')}</td>
                        <td>{this.props.brands.map(ob1=>ob.prod_brand==ob1._id?ob1.brand_name:'')}</td>
                      </tr>
                    ))}
                    {/* {console.log(this.state.products)} */}
                  </tbody>
                </table>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}
