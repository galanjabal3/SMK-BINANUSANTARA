import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

class Kepalasekolah extends Component{
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
                     <h1 style={{ textAlign:'center' }}>Selamat datang di Halaman Kepala Sekolah <br/>SMK BINA NUSANTARA</h1><hr/>
                     <h2>Kepala Sekolah <br/>SMK BINUS SEMARANG</h2>
                     <img src="/Eka-225x300-1.jpg" width="225" height="300"/>
                     <p>Eka Aribawa,S.Pd.I<br/>
                     Kepala Sekolah</p>
                     <div align="left">
                     <h2>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ </h2><br/>
                     <p>
                     Alhamdulillahirobbil’alamin puji syukur kepada Allah SWT atas ridho Nya web SMK Bina Nusantara Semarang dapat tersusun dengan baik. Shalawat dan Salam Tercurah kepada Nabi Muhammad SAW yang kita tunggu pertolongannya di Yaumul Qiyamah kelak.<br/><br/>
                     SMK Bina Nusantara mempunyai visi untuk menjadi salah satu SMK swasta di Kota Semarang yang tidak hanya dapat dihitung keanggotaannya namun juga diperhitungkan keberadaannya. Terbukti dengan usaha peningkatan kualitas yang dibuktikan dengan kelengkapan sarana prasarana yang menunjang pembelajaran dan pelatihan ketrampilan siswa secara maksimal. Didukung dengan tenaga pendidik dan kependidikan yang berkompeten di bidangnya untuk kemajuan ketrampilan dan karakter siswa-siswanya.<br/><br/>
                     Dari bidang Kurikulum, SMK Bina Nusantara telah berhasil melaksanakan program link and match dengan Industri  sesuai dengan kompetensi keahlian yang kami miliki. Salah satunya adalah dilaksanakannya kelas Industri yang bekerjasama dengan Astra Honda Motor, Intel Education, PT. Telkom, Excellent Computer dan PT. Apparel One Indonesia, PT. Alfaria Trijaya Tbk dan juga Santren Koding.<br/><br/>
                     Dari bidang Kesiswaan, SMK Bina Nusantara menerapkan metode pembinaan yang bertujuan untuk peningkatan karakter siswa untuk menjadi sumber daya yang kompetitif dan berakhlakul karimah.<br/><br/>
                     BKK Mitra Binusa adalah organisasi legal yang secara khusus memasarkan lulusan untuk dapat disalurkan di Industri, dan secara umum membantu warga lingkungan sekitar atas informasi lowongan pekerjaan yang ada. Kami berharap dengan adanya website ini dapat memberikan informasi atas keberadaan SMK Bina Nusantara Semarang.<br/><br/>
                     </p>
                     <h2>وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                     </h2> 
                     </div><hr/>
                 </Mui.Container>
            </div>
        )
    }
}

export default Kepalasekolah;