import {Link} from 'react-router-dom';
export default function Projects(){
    return(
        
         <div className="project">
         <h1>About Project </h1>
         <div className="grp">
            <div>
                <h2>Target Detection and Tracking</h2>
                <p1>-Iot programing,Nvdia GPU Programing,DeepLearning</p1>
                <br></br>
                <p2>An anonomous navigation by military tank towards its target such as following another military tank...</p2>
                <h2><Link to="/ps1" >See more..</Link></h2>
            </div>
            <div>
                <h2>Video Meet</h2>
                <p1>-MERN Stack and WebRTC</p1>
                <br></br>
                <p2>Developing a real time video conferences using WebRTC,React,JSX and P2P.</p2>
            </div>
         </div>
         
        </div>
    )
}