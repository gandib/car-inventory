import './App.css';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItem from './Pages/AddItem/AddItem';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}></Route>
        <Route path='additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>}></Route>
        <Route path='myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
