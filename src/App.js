import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Beranda from'./component/Beranda';
import Guru from'./component/Guru';
import Sejarah from'./component/Sejarah';
import Kepalasekolah from'./component/Kepalasekolah';
import Jurusan from'./component/Jurusan';
import Alamatkontak from './component/Alamatkontak';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Link path='/' exact component={Beranda}/>
     <Link path='/guru' component={Guru}/>  
     <Link path='/sejarah' component={Sejarah}/>
     <Link path='/kepalasekolah' component={Kepalasekolah}/>
     <Link path='/jurusan' component={Jurusan}/>  
     <Link path='/alamatkontak' component={Alamatkontak}/> 
   </Switch>
   </BrowserRouter>
  );
}

export default App;

