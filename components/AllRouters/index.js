import { useRoutes } from "react-router-dom";
import { routes } from "../../Router";

function AllRouters(){
    const elements=useRoutes(routes);
    return (
        <>
            {elements}
        </>
    )
}
export default AllRouters;