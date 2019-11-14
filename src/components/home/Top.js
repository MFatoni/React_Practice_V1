import React from "react";

const Top = () =>{
    function handlePesan(value,e){
        e.preventDefault();
        alert("Halaman Top Tampil");
        alert(value);
    }
    return(
        // <a href="/" onClick={ handlePesan }>Halaman Top</a>
        <a href="/" onClick={ (e)=>handlePesan("Pesan Dari Top",e) }>Halaman Top</a>
    )
}
export default Top;