import { Component } from "react";
import Header from "./Header";
import { json } from "react-router-dom";

export default class Catagory extends Component {
  

  save=(event)=>{
    let ob = {
      cate_name : this.catabox.value
    }
    fetch('http://apps.codebetter.in:8082/emall/api/category/save',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },body: JSON.stringify(ob)
    }).then(response=>response.json()).then(result=>this.setState({catagory1 :[...this.state.catagory1,result]}))
    // this.setState({catagory1 : [...this.state.catagory1,this.catabox.value]})
    event.preventDefault()
    event.target.reset()

  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div class="row">
            <div className="col-12">
              <h1 className="alert-success">Catagory Page</h1>
              <hr className="tm-hr-primary tm-mb-55" />
            </div>
          </div>
          <form onSubmit={this.save}>
          <div className="row">
            
            <div className="col-lg-6 d-flex">
            
              <input ref={ob=>this.catabox=ob} className="form-control" type="text" required />&nbsp;<button style={{width:'200px'}} className="btn btn-success">Add Catagory</button>
              
              </div>
              
            </div>
            </form>
          {console.log(this.props.catagory1)}
          {this.props.catagory1==''?<div className="text-center">
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>:'' }
          <div className="mt-3">
            <table className="table">
              <tbody>
                <tr>
                  <th>Sr.No</th>
                  <th>Catagory Name</th>
                </tr>
              </tbody>
              <tbody>
                {this.props.catagory1.map((ob, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{ob.cate_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
