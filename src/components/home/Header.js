import React, { Component } from 'react';
//CSS Eksternal
import "./header.css"

const judul={
  color: "orange",
  backgroundColor: "blue",
  marginTop:"50px"
}

//import React from "react"; //Bisa menggunakan ini juga pasangan React.Component

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true,
      date: new Date()

    };
    this.handlePesan = this.handlePesan.bind(this); //pasangan untuk alert (this.state.daftar)
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault()
    //alert ("Halaman Pesan")
    alert(this.state.daftar);
    alert(value);
  }
  componentDidMount() {
    console.log("Jalan : componentDidMount");
  }

  handleElement() {
    this.setState((state, props)=> {
      return { statusRendering:!state.statusRendering}
    })
  }


//class Header extends React.Component{ //Bisa menggunakan ini juga
  render() {
    console.log("Jalan : Render");
    console.log(this.state.statusRendering);

    return (
      <div>
        {this.state.statusRendering === true ? (
        <div>
          <h1 style={
            {color: "blue",
             backgroundColor: "red",
             marginTop:"50px"}
           }>Selamat Datang</h1>

          <h2 style={judul }>Silahkan Pilih Makanan</h2>
        </div>
        ) : (
        <div>
          <h1 id="judulKedua">Selamat Tinggal</h1>

          <h2 className="judulInfo">Jangan Lupa Datang Kembali</h2>
        </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    )

    // return(
    //   <div>
    //     <h2>Masakan Padang </h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header", e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // )
  }
}

export default Header;
