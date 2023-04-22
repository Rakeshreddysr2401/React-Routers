import { useRouteError ,Link} from "react-router-dom"

export default function CareerErrors(){
    const error=useRouteError();
    return(
        <div className="careererrors">
        <h1>Error</h1>
        <p>{error.message}</p>
        <Link to="/">To go to HomePage ClickHere</Link>
        </div>
    )
}