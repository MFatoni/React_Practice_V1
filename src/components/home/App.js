// import React,{Component} from 'react';
import React from "react";
// import {Header} from './Header';
import Header from "./Header";
import Footer1 from "./Footer.js";
import List from "./List";
import Top from "./Top";
import Main from "./Main";
import Form from "./Form";
import CostumInput from "./CostumInput";

const Footer = () => {
  return (
    <div>
      <h4>Halaman Footer</h4>
    </div>
  );
};
class Testing extends React.Component {
  render() {
    return (
      <div>
        <h2>Testing Komponen</h2>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Testing />
      <Header list="3 Terbaik" />
      <Top />
      <Form />
      <CostumInput />
      <Main
        menuMakanan={[
          {
            nama: "Mie Ayam Props",
            harga: 1000
          },
          {
            nama: "Bakso Props",
            harga: 15000
          },
          {
            nama: "Soto Props",
            harga: 10000
          }
        ]}
      />
      <List />
      <h1>Rendering Elements</h1>
      <Footer />
      <Footer1 name="Makanan Nusantara" />
    </div>
  );
}

export default App;
