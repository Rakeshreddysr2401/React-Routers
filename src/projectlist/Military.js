
import {useState ,useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';
const Military= ()=>{
    const data=useLoaderData(cl);
    console.log(data);WDS_SOCKET_PORT=3000
    // const[data,setData]=useState(null);
    // //const[ispending,setIspending]=useState(true);
    // const[error,setError]=useState(null);
   
    // useEffect(()=>{
    //     // fetch('http://localhost:4000/careers')
    //     // .then(res=>{
    //     //     if(!res.ok){
    //     //         throw Error('could not fetch the data for that id')
    //     //     }
    //     //     return res.json();}).then(data=>{setData(data);setIspending(false);setError(null);console.log(data)}).catch(err=>{setIspending(false);setError(err.message);console.log(err)})
      

    // },[])
    return(
        <div className="project1">
            <h1>Millitary Tank detection</h1>
            {/* {error && <div>{error}</div>}
            {ispending && <div>Loading....</div>}  */}
            {<p>{data}</p>}
            {/* {data && <CareerList careers={careers} title="All Careers"></CareerList>} */}
            
    
        </div>
        
    );
}
export const cl=async()=>{
    const res= await fetch('http://localhost:4000/careers');
    if(!res.ok){
        throw Error('could not fetch data');
    }
    return res.json();
}
export default Military;