import {NavLink,Outlet} from 'react-router-dom';

export default function HelpLayout(){
    return(
        <div className="helplayout">
        <h2>Help page</h2>
        <button><NavLink to="faq">Faq's</NavLink></button>
        
        <button><NavLink to="contact">Contact</NavLink></button>
        <Outlet/>
        </div>
    )
}