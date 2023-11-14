import { Routes, Route } from 'react-router-dom';
import Home from './componentes/home/Home';
import ProductInput from './componentes/productInput/ProductInput'
import Users from './componentes/userInput/UserInput';
import SalesPersonInput from './componentes/salespersonInput/SalesPersonInput';

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductInput/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/sales' element={<SalesPersonInput/>}/>
        </Routes>
    )
}

export default MainRoutes;