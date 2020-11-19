import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Jurusan extends Component{
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
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Jurusan <br/>SMK BINA NUSANTARA</h1><hr/>
                     <div align="left">
                         <h2>1. Akuntansi</h2>
                         <p>Akuntansi merupakan kompetensi yg mempelajari proses mencatat,mengolah dan menyajikan data yg berkaitan dengan keuangan.Untuk jurusan akuntansi di SMK, siswa di berikan banyak teori mengeni akuntansi keuangan perusahaan jasa,akuntansi keuangan perusahaan dagang dan perpajakan. Selain itu,siswa jurusan akuntansi juga dibekali dengan komputerisasi akuntansi, misalnya menggunakan program MYOB yang dapat menjadi nilai plus untuk lulusan SMK jurusan akuntansi.</p>
                        <Mui.Grid item xs={12} sm={6}>
                        <Mui.Paper ><img src="/akun.jpg" width="300" height="300"/> <img src="/tansi.jpg" width="300" height="300" /></Mui.Paper>
                        </Mui.Grid><hr/>
                         <h2>2. TBSM</h2>
                         <p>Tenik Bisnis Sepeda Motor adalah kompetensi yang mempelajari tentang perawatan, perbaikan, dan modifikasi sepeda motor.<br/>
                        Lulusannya mampu menjadi Teknisi yang berkarakter profesional, ahli dan terampil dalam melakukan perawatan dan perbaikan mesin sepeda motor, chasis, pemindahan tenaga, sistem kelistrikan sepeda motor, kreatif dalam modifikasi dan asesoris sepeda motor,merancang dan membuat produk yang berbasis welding (pengelasan), dan menguasai Otomotif Technology Computer mutakhir.</p>
                        <Mui.Grid item xs={12} sm={6}>
                        <Mui.Paper ><img src="/tbsm.jpg" width="300" height="300"/> <img src="/logo.jpg" width="300" height="350" /></Mui.Paper>
                        </Mui.Grid><hr/>
                        <h2>3. TKJ (Teknik Komputer Jaringan)</h2>
                        <p>Teknik komputer dan jaringan adalah kompetensi keahlian yg mempelajari tentang teknologi informasi dan jaringan. Di smk bina nusantara lulusannya mampu menjadi network engineer,software development dan juga bisa membuat film animasi .<br/><br/>
                        Pembelajarannya menggunakan cyber class dan menggunakan peralatan yang canggih seperti IBD, VIRTUALISER, dan menggunakan piranti multimedia lainnya. Bekerja sama dengan Intel Education untuk menjamin kualitas pembelajaran sesuai dengan kebutuhan industri.</p>
                        <Mui.Grid item xs={12} sm={12}>
                        <Mui.Paper ><img src="/tk.jpg" width="400" height="300"/> <img src="/1tkj.jpg" width="400" height="300" /></Mui.Paper>
                        </Mui.Grid><hr/>
                        <h2>4. Tata Busana</h2>
                        <p>Tata Busana merupakan kompetensi yang mempelajari bagaimana mendesain busana yg sesuai dengan bentuk tubuh serta karakteristik model atau seseorang. Tidak hanya mendesain,tapi juga membuat pola hingga desain tersebut menjadi busana.<br/><br/>
                        Lulusan TB dapat mendapat menjadi seorang desainer/perancang busana,dapat pula membuka usaha sendiri berupa butik/konveksi/tailor.</p>
                        <Mui.Grid item xs={12} sm={12}>
                        <Mui.Paper ><img src="/tata.jpg" width="400" height="300"/> <img src="/foto.jpg" width="400" height="300" /></Mui.Paper>
                        </Mui.Grid><hr/>
                     </div>
                 </Mui.Container>
                 </div>
        )
    }
}

export default Jurusan;