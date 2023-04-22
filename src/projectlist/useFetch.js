// import {useState,useEffect} from 'react';
//  const useFetch=(url)=>{
//     //  return "rakesh";
//     const[data,setData]=useState(null);
//     const[isPending,setIsPending]=useState(true);
//     const[error,setError]=useState(null);
//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch(url).then(res=>{ 
//             if(!res.ok){throw Error("Could not fetch the data for the given") }
//             return res.json();
//             }
//         ).then(data=>{setData(data); setIsPending(false); setError(null);}
//         ).catch((err)=>{setIsPending(false);setError(err.message);})
//     },1000);},[url]);
//     return {data,isPending,error}
// }
// export default useFetch;
import { useLoaderData,Link } from "react-router-dom"
export default function useFetch(){
    const data=useLoaderData(fetchLoader);
    return(
        <div className='carear'>
             {data.map(career=>(
                <Link to = {career.id.toString()} key={career.id}>
                    <p>Fetch data</p>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))} 
        </div>
    )
}
export const fetchLoader = async()=>{
    const res= await fetch('http://localhost:4000/careers');
    return res.json();
}