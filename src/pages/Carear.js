import { useLoaderData,Link } from "react-router-dom"
export default function Carear(){
    const careers=useLoaderData(carearLoader);
    return(
        <div className='carear'>
             {careers.map(career=>(
                <Link to = {career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))} 
        </div>
    )
}
export const carearLoader = async()=>{
    const res= await fetch('http://localhost:4000/careers');
    return res.json();
}