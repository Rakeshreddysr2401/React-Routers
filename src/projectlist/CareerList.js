const CareerList=({data,title})=>{
    return(
        <div className="careerlist">
            <h2>{title}</h2>
            <p>hellocareer</p>
            {data.map((dat)=>(
                <div className="career-preview" keys={dat.id}>
                <h2>Title:{dat.title} key=</h2>
                <p1>Salary:{dat.salary}</p1>
                <p2>Location:{dat.location}</p2>
                </div>)
            )}
        </div>
    )
}
// const CareerList=(props)=>{
//     return(
//         <div>
//         <h1>Helloo CArerre List</h1>
//         <h1>{props.data}</h1>
//         </div>
//     )
// }
export default CareerList;