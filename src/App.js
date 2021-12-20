import "./sb-admin-2.css";
import Sidebar from './Sidebar';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Userlist from "./Userlist";
import Createuser from "./Createuser";
import Edituser from "./Edituser";
import Deleteuser from "./Deleteuser";
import Product from "./Product";
import CreateProduct from "./CreateProduct";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar/>
        <div id="content-wrapper" class="d-flex flex-column">
         <div id="content">
        <Navbar/>
        <div class="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/users" element={<Userlist/>}></Route>
            <Route path="/products" element={<Product/>}></Route>
            <Route path="/createuser" element={<Createuser/>}></Route>
            <Route path="/edituser" element={<Edituser/>}></Route>
            <Route path="/deleteuser" element={<Deleteuser/>}></Route>
            <Route path="/createproduct" element={<CreateProduct/>}></Route>
            <Route path="/editproduct" element={<EditProduct/>}></Route>
            <Route path="/deleteproduct" element={<DeleteProduct/>}></Route>
          </Routes>
        </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
}

export default App;
