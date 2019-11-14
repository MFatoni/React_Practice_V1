import React, {Component} from "react";
import "./header.css";
const judul = {
  color: "orange",
  background: "black"
};
// export function Header(){
//     return(
//         <div>
//             <h2>Makanan Khas Indonesia</h2>
//         </div>
//     );
// }

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
    // alert("pesan"); tetap jalan tanpa bind
  }

  handleElement() {
    this.setState((state, props) => {
      return {statusRendering: !state.statusRendering};
    });
  }

  componentDidMount() {
    console.log("Jalan :componentDidMount");
  }
  render() {
    console.log("Jalan : Render");
    console.log(this.state.statusRendering);
    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1 style={{color: "blue", background: "yellow", marginTop: "2em"}}>
              Selamat Datang
            </h1>
            <h2 style={judul}>Silahkan Pilih Makanan</h2>
          </div>
        ) : (
          <div>
            <h1 id="judulKedua">Selamat Tinggal</h1>
            <h2 className="judulInfo">Jangan lupa datang kembali</h2>
          </div>
        )}
        <button onClick={this.handleElement}> Change </button>
      </div>
    );
    // return (
    //   <div>
    //     <h2>Makanan Khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={e => this.handlePesan("Pesan Dari Header", e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // );
  }
}
export default Header;
