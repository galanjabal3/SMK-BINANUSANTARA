import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Alamatkontak extends Component{
    render(){
        return(
                 <Mui.Container fixed>
                     <div align="center">
                     <Mui.Button variant="outlined" color="primary" href="/">Beranda</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/sejarah">Sejarah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/guru">Guru</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/jurusan">Jurusan</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/alamatkontak">Alamat-Kontak</Mui.Button><br/>
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Alamat & kontak <br/>SMK BINA NUSANTARA</h1><hr/>
                     </div>        
                     <h2 style={{ textAlign:'center' }}>Alamat & Kontak</h2>
                     <Mui.Grid container spacing={3}>
                     <Mui.Grid item xs={12} sm={6}>
                     <Mui.Paper><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63362.21775183112!2d110.29801172143985!3d-6.9929511156061785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705fdc0235654d%3A0x97b3afe1b2104e70!2sSMK%20Bina%20Nusantara%20Semarang!5e0!3m2!1sid!2sid!4v1605760434945!5m2!1sid!2sid" width="600" height="450" /></Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={12} sm={6}>
                     <Mui.Paper >
                         <h2>SMK BINA NUSANTARA</h2>
                         <p>(NSS: 402036316053, NPSN:  20328986)</p>
                         <p>Alamat : Jl. Kemantren No. 5 RT 04 RW 02 Kelurahan Wonosari Kecamatan Ngaliyan Semarang</p>
                         <p>Telp : (024) 8662971</p>
                         <p>Email : smkbinusasmg@yahoo.com</p>
                     </Mui.Paper>
                     </Mui.Grid>
                     </Mui.Grid>                    
                 </Mui.Container>
        )
    }
}

export default Alamatkontak;