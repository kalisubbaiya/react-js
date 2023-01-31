import React, {createElement} from 'react';
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

import Header  from './Header/Header';
import Banner from './Banner/Banner';
import Content from './Contetn.js/Content';
import Footer from './Footer.js/Footer';
 
function Main(){
    return (
      <div>
        <Header />
        <Banner />
        <Content />
        <Footer />
      </div>
    )
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Main />
);