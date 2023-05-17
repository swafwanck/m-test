import AddProduct from "./components/screens/AddProduct";
import ViewProduct from "./components/screens/ViewProduct";
import EditProduct from "./components/screens/EditProduct";
import DeleteProduct from "./components/screens/DeleteProduct";
import UpdateImage from "./components/screens/UpdateImage";
import ViewProductById from "./components/screens/ViewProductById";

import { Route, Routes, Router } from "react-router-dom";
function App() {
  return (
    <>
      <ViewProduct />
      <AddProduct />
      <EditProduct />
      <DeleteProduct />
      <UpdateImage />
      <ViewProductById />
     
    </>
  );
}

export default App;
