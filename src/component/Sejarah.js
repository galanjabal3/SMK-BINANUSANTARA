import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Sejarah extends Component{
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
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Sejarah <br/>SMK BINA NUSANTARA</h1><hr/>
                     <h2>~Sejarah~</h2>
                     <img src="/logo smk.jpg" width="500" height="350"/>
                     <div align="left">
                         <p>SMK BINA NUSANTARA SEMARANG adalah sekolah menenengah kejuruan yang berdiri pada tanggal 18 mei 2010 dibawah Yayasan Bina Nusantara yang di ketuai Drs.Sugiyono,M.M dan Sugiyarto,S.Kom, M.M.<br/><br/>
                            SMK BINA NUSANTARA SEMARANG beralamat di jl.Kemantren No.5 wonosari Ngaliyan Semarang. Dengan luas lokasi  4004 m2, sarana dan prasarana yang memadai, suasana belajar yang nyaman karena berada di tengah perkamampungan masyarakat yang jauh dari kebisingan.<br/><br/>
                            Jumlah siswa SMK BINA NUSANTARA mengalami peningkatan dari tahun ketahun. Mayoritas siswa berasal dari lingkungan sekitar, Kota Semarang, dan luar Semarang. Siswa berasal dari keluarga dengan perekonomian menengah kebawah.</p><hr/>
                     <h2 style={{ textAlign:'center' }}>TUJUAN SMK BINA NUSANTARA</h2>
                     <p>1. Mempersiapkan tamatan yang memiliki kepribadian dan berakhlak mulia sebagai tenaga kerja tingkat menengah yang kompeten sesuai program keahlian pilihannya.<br/><br/>
                     2. Membekali peserta didik untuk berkarir, mandiri yang mampu beradaptasi dilingkungan kerja sesuai bidangnya dan mampu menghadapi perubahan yang terjadi di masyarakat.<br/><br/>
                     3. Membekali peserta didik sikap profesional untuk mengembangkan diri dan mampu berkompetisi di tingkat nasional, regional dan internasional.</p>
                     </div>
                 </Mui.Container>
            </div>
        )
    }
}

export default Sejarah;