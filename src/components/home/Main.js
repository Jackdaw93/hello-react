import React, { Component } from "react";
import menuMakanan from "./lib/Food"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title    : "Menu Makanan",
      title2   : "Menu Minuman",
      inputValue: "",
      inputKota : "",
      // menuMakanan:[
      //   {
      //     nama  : "Mie Ayam",
      //     harga : 10000
      //   },
      //   {
      //     nama  : "Bakso",
      //     harga : 15000
      //   },
      //   {
      //     nama  : "Mie Ayam Bakso",
      //     harga : 20000
      //   },
      //   {
      //     nama  : "Soto",
      //     harga : 25000
      //   }
      // ]
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // rubahData() {
  //   this.setState({title: "Pilih Makanan"});
  // }

  // handleChange(e {
  //   console.log("Jalan");


    handleChange(value, e) {
      this.setState({ [value]: e.target.value }) //setState dalam bentuk Objek

      // const eventTarget = e.target.value; //penulisan dalam bentuk Ero Function
      // this.setState((state, props) => {
      //
      //   return {
      //     inputValue: eventTarget
      //   };
      // });


      //console.log(e.target.value);

    }

    rubahData() {
      this.setState((state, props) => {
        return {
            // title: "Pilih Menu Makanan",
            // title2: "Pilih Menu Minuman"

               title: state.title2,
               title2: state.title

          };
      });
    }

  render() {
    return (
      <div>
          <h3>{this.state.title}</h3>
          <h2>{this.state.title2}</h2>
          <button onClick={this.rubahData}>Rubah Data</button>
          <br />
          <br />

          <input type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange("inputValue", e)}
          placeholder="Nama" />

          <input type="text"
          value={this.state.inputKota}
          onChange={(e) => this.handleChange("inputKota", e)}
          placeholder="Kota" />

          {menuMakanan.map((value, index) => {
            console.log(value);
            return(
              <div key={index}>
                  <p>No    : {index + 1} </p>
                  <p>Nama  : {value.nama} </p>
                  <p>Harga : {value.harga} </p>
              </div>
              )
            })
         }
      </div>
    );
  }
}


export default Main;
