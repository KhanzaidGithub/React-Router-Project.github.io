import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import User from '../User/User'
import Github from '../Github/Github'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound'
import Protected from '../Protection/Protected'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Routing = () => {
    return (
        // <div>
        //     <Header />
        //     <Routes>
        //         <Route path='/home' element={<Protected><Home /></Protected>} >
        //             <Route path='about' element={<Protected><About /></Protected>} />
        //             <Route path='contact' element={<Protected><Contact /></Protected>} />
        //             <Route path='user/:userid' element={<Protected><User /></Protected>} />
        //             <Route path='github' element={<Protected><Github /></Protected>} />
        //         </Route>
        //         <Route path='/' element={<Login />} />
        //         <Route path='*' element={<PageNotFound />} />
        //     </Routes>
        //     <Footer/>
        // </div>

        <div>
            <Header />
            <Routes>
                <Route path='/home' element={<Protected><Home /></Protected>} />
                <Route path='about' element={<Protected><About /></Protected>} />
                <Route path='contact' element={<Protected><Contact /></Protected>} />
                <Route path='user/:userid' element={<Protected><User /></Protected>} />
                <Route path='github' element={<Protected><Github /></Protected>} />
                <Route path='/' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Routing
