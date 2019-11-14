import React, {Component} from "react";
import menuMakananExt from "./lib/Food";

const menuMakanan = [
  {
    nama: "Mie Ayam Internal",
    harga: 1000
  },
  {
    nama: "Bakso Internal",
    harga: 15000
  },
  {
    nama: "Soto Internal",
    harga: 10000
  }
];

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        {
          nama: "Mie Ayam state",
          harga: 1000
        },
        {
          nama: "Bakso state",
          harga: 15000
        },
        {
          nama: "Soto state",
          harga: 10000
        }
      ]
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // rubahData(){
  //     this.setState({title:"Pilih Makanan"});
  // }

  handleChange(value, e) {
    // console.log(e.target.value);
    // this.setState({inputValue: e.target.value});
    // const eventTarget = e.target.value;
    // this.setState((state, props) => {
    //   return {
    //     inputValue: eventTarget
    //   };
    // });
    this.setState({[value]: e.target.value});
  }

  rubahData() {
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title
      };
    });
  }

  render() {
    console.log(this.props.menuMakanan);
    return (
      <div>
        <h3> {this.state.title} </h3>
        <h2> {this.state.title2} </h2>
        <button onClick={this.rubahData}>Rubah Data</button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange("inputValue", e)}
          placeholder="nama"
        />
        <input
          type="text"
          value={this.state.inputKota}
          onChange={e => this.handleChange("inputKota", e)}
          placeholder="kota"
        />

        {menuMakananExt.map((value, index) => {
          // menuMakanan.map((value, index)
          // this.props.menuMakanan.map((value, index)
          // this.state.menuMakanan.map((value, index
          return (
            <div key={index}>
              <p>No :{index + 1}</p>
              <p>Nama Makanan: {value.nama}</p>
              <p>Harga : {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Main;
