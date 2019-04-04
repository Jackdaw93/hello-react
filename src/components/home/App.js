import React, { Component } from 'react';
import Header from "./Header"
import Top    from "./Top"
import CustomInput from "./CustomInput"
// import Main   from "./Main"
// import Form from "./Form"
import Footer from "./Footer"
//import List   from "./List"


// const Footer = () => {
//   return (
//     <div>
//       <h4>Halaman Footer</h4>
//       <p>@2019</p>
//     </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <div>
        <Header list="List 3 Terbaik"/>
          <Top />
          <CustomInput />
          <br />
          {
        // <Form />
       // <Main />
      //<List />
          }
        {
        //Comment didalam peryataan return harus disertakan curlybraket {}
        }
          <Footer name="Makanan Nusantara" tahun="1993"/>
          </div>
    );
  }
}

export default App;
