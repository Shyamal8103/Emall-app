import { Component } from "react";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="row">
            <div className="col-12">
              <h1 className="alert-success">Home Page</h1>
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
            <div>
                <img src="./emall-logo-v1.webp" alt="" width={900} height={300}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
