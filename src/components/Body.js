import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body =()=>{
    const appRouter = createBrowserRouter([
    {
        path: "/",
        Element: <Login/>,
    },
    {
        path: "/browse",
        Element: <Browse/>,
    }

    ]);
    return (
        <div>
            <RouterProvider router ={appRouter}/> 
        </div>
    )
}
export default Body;