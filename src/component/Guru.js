import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Guru extends Component{
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
                     <h1 style={{ textAlign:'center' }}>Selamat datang di  Halaman Guru <br/>SMK BINA NUSANTARA</h1><hr/>
                     <h2>Daftar Guru di SMK BINA NUSANTARA</h2>
                                       
                     <Mui.Grid container spacing={1}>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/Eka-225x300-1.jpg" width="225" height="300"/>
                             <p>Eka Aribawa,S.Pd.I<br/><br/>Kepala Sekolah</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="1.jpg" width="225" height="300" />
                              <p>Septi Muslikhah<br/><br/>Waka Kurikulum</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="3.jpg" width="225" height="300" />
                             <p>Ari Dwi Handoko,S.Pd<br/><br/>Waka Kesiswaan</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="4.jpg" width="225" height="300" />
                              <p>Khusnul Khotima,S.Pd<br/><br/>Waka Sarana dan Prasarana</p>
                         </Mui.Paper>
                     </Mui.Grid>
                      
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/5.jpg" width="225" height="300"/>
                             <p>Askuriat,S.E <br/><br/>Waka SDM</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/6.jpg" width="225" height="300" />
                              <p>Arga Dian SW,S.Kom<br/><br/>K3 Teknik Komputer dan Jaringan</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="/7.jpeg" width="225" height="300" />
                             <p>Isti Malinda,S.Pd<br/><br/>K3 Tata Busana</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/8.jpeg" width="225" height="300" />
                              <p>Wahyu Ambikawati,S.Pd<br/><br/>K3 Teknik Bisnis Sepeda Motor</p>
                         </Mui.Paper>
                     </Mui.Grid>

                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/9.jpeg" width="225" height="300"/>
                             <p>Novita Widyastutik,S.Pd <br/><br/>K3 Akuntansi dan Keuangan Lembaga</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/10.jpeg" width="225" height="300" />
                              <p>Dianing Ratri O,S.Pd<br/><br/>Sekretaris Jurusan Teknik Komputer dan Jaringan</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="/11.jpeg" width="225" height="300" />
                             <p>Soimatun,S.Pd<br/><br/>Sekretaris Jurusan Tata Busana</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/12.jpg" width="225" height="300" />
                              <p>Tri Rabisan,S.Pd<br/><br/>Sekretaris Jurusan Teknik Bisnis Sepeda Motor</p>
                         </Mui.Paper>
                     </Mui.Grid>

                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/13.jpeg" width="225" height="300"/>
                             <p>Vega Nurmalita,S.Pd <br/><br/>Sekretaris Jurusan Akuntansi dan Keuangan Lembaga</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/14.jpeg" width="225" height="300" />
                              <p>Taqius SA,S.Kom<br/><br/>Ka. Lab Jurusan Teknik Komputer dan Jaringan</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="/15.jpeg" width="225" height="300" />
                             <p>Aroem Santi L,S.Pd<br/><br/>Ka. Lab Jurusan Tata Busana</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/16.jpg" width="225" height="300" />
                              <p>Nonok Royin Wibowo<br/><br/>Ka. Lab Sekretaris Jurusan Teknik Bisnis Sepeda Motor</p>
                         </Mui.Paper>
                     </Mui.Grid>

                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/17.jpeg" width="225" height="300"/>
                             <p>Indah Noviani,S.Pd<br/><br/>Guru Mapel Bahasa Indonesia</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/18.jpeg" width="225" height="300" />
                              <p>Ida Fahru Roziyah,S.Pd<br/><br/>Guru Mapel Bahasa Jawa</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="/19.jpeg" width="225" height="300" />
                             <p>Indah Dwi Putri Banjarsari,S.Pd<br/><br/>Guru Mapel Matematika</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/arif.jpeg" width="225" height="300" />
                              <p>Arif Adi Wijaya,S.Pd<br/><br/>Guru Mapel Penjasorkes</p>
                         </Mui.Paper>
                     </Mui.Grid>

                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper >
                             <img src="/20.jpeg" width="225" height="300"/>
                             <p>Tito Dwi Yulianto,S.Pd<br/><br/>Guru Mapel Bahasa Inggris</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/21.jpeg" width="225" height="300" />
                              <p>Muhammad Sholeh,S.Pd.I<br/><br/>Guru Mapel Agama Islam</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                     <Mui.Paper >
                             <img src="/22.jpeg" width="225" height="300" />
                             <p>Siti Masruroh,A.Md<br/><br/>Guru Mapel Bahasa Jepang</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/23.jpeg" width="225" height="300" />
                              <p>Ruri Ayuning Lati,S.Pd<br/><br/>Guru Bk</p>
                         </Mui.Paper>
                     </Mui.Grid>
                     <Mui.Grid item xs={6} sm={3}>
                         <Mui.Paper>
                              <img src="/24.jpeg" width="225" height="300" />
                              <p>Rufi Tri Irianti,S.Pd<br/><br/>Guru Mapel Pendidikan Karakter</p>
                         </Mui.Paper>
                     </Mui.Grid>

                    </Mui.Grid> 
                    </div>   
                 </Mui.Container>             
        )
    }
}

export default Guru;