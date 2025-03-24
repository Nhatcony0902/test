import DetailProducts from "../components/DetailProduct/DetailProducts";
import Product from "../components/Product";
import LayoutDefault from "../LayoutDefault";
import CMR from "../Pages/CMR";
import Default from "../Pages/Default";
import Ecommer from "../Pages/Ecommer";
import Register from "../Pages/Register";
import Login from "../Pages/Signin";


export const routes =[
    {
        path:"/",
        element:<LayoutDefault></LayoutDefault>,
        children :[
          {
            path:"/Default",
            element:<Default></Default>
          },
          {
            path:"/CMR",
            element:<CMR/>
          },
          {
            path:"/Ecommer",
            element:<Ecommer/>
          },
          {
            path:"/",
            element:<Product/>
          },
          {
            path:"/Product",
            element:<Product/>,
           

            
          },
          {
            path:"/DetailProducts/:id",
            element:<DetailProducts/>
          },
          {
            path:"Login",
            element:<Login/>
          },
          {
            path:"Register",
            element:<Register/>
          }
        ]
    }
];