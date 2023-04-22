import {Link} from 'react-router-dom'
export default function NotFound(){
    return(
        <div className="notfound">
            <h1>Not Founded Any Page</h1>
            <h2>Link to Home Page <Link to="/">Click Here</Link></h2>
        </div>
    )
}