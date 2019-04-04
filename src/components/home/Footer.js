import React from 'react';

const Footer = (props) => {
//  var name = "Rohmad"
  return (
    <div>
      <h4><b>Halaman Footer {props.name}</b></h4>
      <p>@{props.tahun}</p>
    </div>
  )
}

// function Footer () {
//   return (
//     <div>
//       <h4><i>Halaman Footer</i></h4> //Bisa Juga Menggunakan Fungsi Ini
//       <p>@2019</p>
//     </div>
//   )
// }

export default Footer;
