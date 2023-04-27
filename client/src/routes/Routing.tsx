import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login';
import Home from '../pages/Home';
import { Register } from '../pages/Register';
import '../styles/style.css';

import { Mapas } from '../pages/Mapas'       
import Categorias from '../pages/Categorias';
import ByCategory from '../pages/ByCategory';
import Dashboard from '../pages/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import { Auth } from '../hooks/useAuth';
import { NotFound } from '../components/NotFound/NotFound';
import { Project } from '../pages/Project';
import { User } from '../interfaces';

import { Publications } from '../components/Publications/Publications';
import { PublicationUpload } from '../pages/PublicationUpload';
import Counties from '../pages/counties';


function Routing(){

    const { user, err, check } = Auth<User | null>('api/Auth/perfil');
    const checkedUser = {} as User;

    if(user){
        checkedUser.id = user.id;
        checkedUser.email = user.email;
        checkedUser.token = user.token;
        checkedUser.patent = user.patent;
    }


    const commonProps = {
        user: checkedUser,
        edit: false
    }


    return(
        <Router>
            <Navbar status={err}/>
            <Routes>
                <Route path='/' element={<Home {...{user, err, check}}/>}/>
                
                <Route path='/mapas' element={<Mapas/>}/>
                <Route path='/mapas/:id' element={<Dashboard {...commonProps}/>}/>
                {/*<Route path='/edit/mapas/:id' element={<Dashboard {...Editprops}/>}/>*/}


                <Route path='/municipios' element={<Counties/>}/>
                <Route path='/categorias' element={<Categorias/>}/>
                <Route path='/categorias/:id' element={<ByCategory/>} />

                <Route path='/Saiba_mais' element={<Project/>}/>

                {/*<Route path='/upload' element={<Upload/>}/>*/}

                <Route path='/publicacoes' element={<Publications {...commonProps}/>}/>
                
                <Route path='/upload/publicacoes' element={<PublicationUpload token={checkedUser.token}/>}/>

                <Route path="*" element={<NotFound/>}/>

                <Route path='/login'
                    element={{...!err && check ? <Navigate to='/'/> : err && !check ? <Login/> :<div></div>}}
                />
                <Route path='/register' 
                    element={{...!err  && check ? <Navigate to='/' replace /> : err && !check ? <Register/> : <div></div>}}
                />               
            </Routes>
        </Router>
    )

}
export default Routing;
