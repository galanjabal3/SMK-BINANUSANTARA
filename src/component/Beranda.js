import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Beranda extends Component{
    render(){
        return(
            <div align="center">
                 <Mui.Container fixed>
                     <Mui.Button variant="outlined" color="primary" href="/">Beranda</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/sejarah">Sejarah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/guru">Guru</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/kepalasekolah">Kepala Sekolah</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/jurusan">Jurusan</Mui.Button>
                     <Mui.Button variant="outlined" color="primary" href="/alamatkontak">Alamat-Kontak</Mui.Button><br/>
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Beranda <br/>SMK BINA NUSANTARA</h1><hr/>
                 <Carousel>
                         <img src='/100.jpg' width="1000" height="500"/>
                         <img src='/maxresdefault.jpg' width="1000" height="500"/>
                         <img src='/smk.jpg' width="1000" height="500"/>
                 </Carousel> <hr/>
                 <Mui.Grid item xs={12} sm={6}>
                <Mui.Paper>
                    <h2>Visi</h2>
                    <p>“Menyiapkan Tenaga Terampil Menengah yang Siap Berkompetisi dan Siap Kerja”</p>
                </Mui.Paper>
                </Mui.Grid>
                <Mui.Grid item xs={12} sm={6}>
                <Mui.Paper>
                    <h2>Misi</h2>
                    <p>1. Menyiapkan lulusan yang siap mengisi pasaran kerja sesuai dengan bidang profesinya<br/>
                    2. Meningkatkan ketrampilan wirausaha<br/>
                    3. Menyiapkan ketrampilan sesuai jurusannya</p>
                </Mui.Paper>
                </Mui.Grid>
                 </Mui.Container>
            </div>
        )
    }
}

export default Beranda;