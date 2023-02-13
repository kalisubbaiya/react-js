import React, {Component, createElement, useState} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const head1= createElement('div', {}, createElement('h1', {}, 'first head'), createElement('h1', {}, 'second head'));
// const name="kaliraj";
// const arr=['aaa', 'bbb', 'ccc'];
// const get=()=>{
//   console.log("clicked");
// }
// const flag=true;
// const head=<div className='sample' style={flag ? {backgroundColor:"red"} : {backgroundColor:"greenyellow"}}>
//   <h1>head1</h1>
//   <h2>head2</h2>
//   {8 + 10}
//   {true? "true":'false'}
//   {name}
//   {arr.map((val, index) => <p key={index}>{val}</p>)}
//   {head1}
//   <button onClick={()=> get()}>click</button>
//   <button onClick={get}>click</button>
//   <button onMouseEnter={get}>click</button>
//   <button onMouseLeave={get}>click</button>
// </div>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   head
// );

// import React, {createElement} from 'react';
// import ReactDOM from 'react-dom/client';

//--> class 2

// import Header  from './Header/Header';
// import Banner from './Banner/Banner';
// import Content from './Content/Content';
// import Footer from './Footer/Footer';
 
// function Main(){
//   const [feature, setFeature] =useState ('Hooks')
//   const [feature1, setFeature1] =useState ('')
//   const data={
//     name:'kaliraj',
//   }
//   const getData = () =>{
//     console.log("called");
//   }
//     return (
//       <div>
//         {feature}<br></br>
//         {feature1}
//         <button onClick={()=>{
//           setFeature('updated hooks');
//           setFeature1('updated js')}
//         }>update feature</button>
//         <Header name={data.name} feature={feature} get={getData}/>
//         <Banner />
//         <Content />
//         <Footer />
//       </div>
//     )
// }
  
// const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <Main />
// );

// import Header from './HeaderClass/Header';

// class Third extends Component {
//   render () {
//     return <div> third Class Component</div>
//   }
// }

// class Secound extends Component {
//   render () {
//     return <div>Secound Class Component</div>
//   }
// }


// class Frist extends Component {
//   render () {
//     console.log("this",this); 
//     return(
//      <div>
//       {" "}
//       First Class Component {this. props.data } {""}
//       <button onClick={()=> this.props.get ("Data")}>Click</button>
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   constructor() {
//     super();
//     this.state= {
//       name:"kaliraj",
//       age:26,
//       feature:"state"
//     };
//     console.log(this);
//   }
//   getData() {
//     console.log("data");
//   }
//   updateName() {
//     this.setState({name:"React State"});
//   }
//   render () {
//     return (
//       <div>
//         {this.state.name}
//         {this.state.age}
//         <button onClick={() => this.updateName()}>Update Name</button>
//         <button onClick={this.updateName.bind(this)}>Update Name</button>
//         Class Component
//         <Frist data="React Class"  get={this.getData}/>
//         <Secound />
//         <Third />
//         <Header />
//       </div>
//     )
//   }
// }

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//   });

//   return <div>
//             <p>The current time is:</p>
//             <p> {time.toLocaleTimeString()}</p>
//           </div>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyComponent />);

// class First extends Component{
//   render(){
//     console.log('this',this);
//     return <div>First Class component {this.props.name} {""}
//     <button onClick={() => this.props.get("data")}>Click</button>
//     </div>
//   }
// }

// class Second extends Component{
//   render(){
//     return <div>Second Class component</div>
//   }
// }

// class Main extends Component{

//   constructor(){
//     super();
//     this.state = {
//       fName:'kali',
//       lName:'raj'
//     }
//     console.log(this);
//   }

//   getData(param){
//     console.log('get data',param);
//   }

//   updateName(){
//     this.setState({fName:"kaliraj", lName:"subbaiyakani"})
//   }

//   render(){
//     console.log(this);
//     return <div>
//       {this.state.fName} {""} {this.state.lName} {""}
//       <button onClick={() => this.updateName()}>update name</button>
//       <button onClick={this.updateName.bind(this)}>update name</button>
//       Class component
//       <First name='react' get={this.getData}/>
//       <Second />
//     </div>
//   }
// }

// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Main />)

// import Header from './HeaderClass/Header';

// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Header />)

// Actual DOM example program in React

// Virtual DOM example program in React

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {count: 0};
//   }
//   handleClick() {
//     this.setState({
//       count: this.state.count + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Add Quantity</h1>
//         {/* <input type="text" value={this.state.count}></input> */}
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick.bind(this)}>ADD</button>
//       </div>
//     );
//   }
// }

// export default App;

import App from './App';


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)