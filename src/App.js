import { Component } from "react";
import Header from "./Header";
import Brand from "./Brand";
import Catagory from "./Catagory";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      catagory1: [],
      brands: [],
      products: [],
    };
  }

  save=(event)=>{
    alert('hi')
    // let ob = {
    //   brand_name : this.brandbox.value
    // }
    // fetch('http://apps.codebetter.in:8082/emall/api/brand/save',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type' : 'application/json'
    //   },body: JSON.stringify(ob)
    // }).then(response=>response.json()).then(result=>this.setState({brands :[...this.state.brands,result]}))
    // // this.setState({catagory1 : [...this.state.catagory1,this.catabox.value]})
    // event.preventDefault()
    // event.target.reset()
  }
  
  componentDidMount() {
    fetch("http://apps.codebetter.in:8082/emall/api/category/list")
      .then((response) => response.json())
      .then((result) => {
        this.setState({ catagory1: result });
        fetch("http://apps.codebetter.in:8082/emall/api/brand/list")
          .then((response) => response.json())
          .then((result) => {
            this.setState({ brands: result });
            fetch("http://apps.codebetter.in:8082/emall/api/product/list")
              .then((response) => response.json())
              .then((result) => this.setState({ products: result }));
          });
      });
  }

  render() {
    return (
      <div>
        <h1>Header Tag</h1>
        <Header />
        <div className="container-fluid">
          <main className="tm-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/Catagory"
                element={<Catagory catagory1={this.state.catagory1} />}
              />
              <Route
                path="/Brand"
                element={<Brand brands={this.state.brands} save={()=>this.save()} />}/>
              <Route
                path="/Product"
                element={<Product products={this.state.products} brands={this.state.brands} catagory1={this.state.catagory1} />}
              />
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}
