import {Outlet} from 'react-router-dom';

export default function CarearLayout(){
    return(
        <div className="carearlayout">
            <h2>CaraerLayOut Page</h2>
            <p2>It's A para about all of our carears in 2024.</p2>
            
            <Outlet/>
        </div>
        
    )
}