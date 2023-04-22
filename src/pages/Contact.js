import {Form,redirect, useActionData} from "react-router-dom";
export default function Contact(){
    const data=useActionData();
    return(
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post" action="\help\contact">
                <label>
                    <span>Your Email:</span>
                    <input type="email" name="email" required></input>
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </Form>
            {data && data.error && <p>{data.error}</p>}
        </div>
        
    )
}
export const contactAction=async({request})=>{
    const data=await request.formData()
    const submission={
        email: data.get('email'),
        message:data.get('message')
    }
    //send post req
    if(submission.message.length <10){
        return{error:"Message need to me long"}
    }
    return redirect("/");
}
