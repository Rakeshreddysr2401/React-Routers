import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails(){
    const {id}=useParams();
    const career=useLoaderData(careerDetailsLoader);
    return(
        <div className="careerdetails">
        <p><strong>Career Details of Id:{id}</strong></p>
        <p><strong>Title:</strong>{career.title}</p>
        <p><strong>Salary:</strong>{career.salary}</p>
        <p><strong>Location of Work:</strong>{career.location}</p>
        <p2>It is a type of job where we get so and so and we leave Happly.</p2>
        </div>
    )
}
export const careerDetailsLoader = async({params})=>{
    const{id}=params;
    const res= await fetch('http://localhost:4000/careers/' + id);
    if(!res.ok){
        throw Error("Could not find the given id");
    }
    if(!res.ok){
        throw Error("Could not find the given career")
    }
    return res.json();
}