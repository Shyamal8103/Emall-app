import { Component } from "react";
import Header from "./Header";

export default class Brand extends Component {

 

  


  render() {

    return (
      <div>
        <Header />
        <div className="container">
          <form onSubmit={this.props.save}>
          <div class="row">
            <div className="col-12">
              <h1 className="alert-success">Brand Page</h1>
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
            </div>
            <div className="col-lg-6   d-flex">
              <input type="text" ref={ob=>this.brandbox=ob} className="form-control" required/>&nbsp;<button style={{width:'150px'}} className="btn btn-success">Add Brand</button></div>
           <div> {this.props.brands==''?<div className="text-center">
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>:'' }
          <div className="mt-3 text-center">
            <table className="table">
              <tbody>
                <tr>
                  <th>Sr.No</th>
                  <th>Brand Name</th>
                </tr>
              </tbody>
              <tbody>
                {this.props.brands.map((ob, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{ob.brand_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
