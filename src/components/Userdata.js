import React,{useState} from 'react';
import emailjs from 'emailjs-com';

const Userdata = () => {
    const formstyle={
        backgroundColor:"aqua",
        boxShadow:"1px 30px 50px black",
        borderRadius:"10px",
        alignItems:"center",
        margin:"200px auto",
        width:"40%",
        height:"400px"
    }
    const inputstyle={
        width: "90%",
        backgroundColor:"hotpink",
        borderBottom:"5px solid red",
        outline:"none",
        border:"none",
        height: "25px",
        borderRadius:'4px',

    }

    const [data, setdata] = useState({
        username:"",
        subject:'',
        email:"",
    })
    const {
        username,
        subject,
        email
    }=data;
     
     
    const chnageHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }


    const submitform=(e)=>{
        e.preventDefault();
        console.log(data);
        emailjs.sendForm('service_i8yrvzd', 'template_1suj75r', e.target, 'user_JN17KLrYZvL9iSb65cfKm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div>
            <form style={formstyle} onSubmit={submitform}>
                <label>username</label>
                <input style={inputstyle} type="text" placeholder="username" name="username" value={username} onChange={chnageHandler} /><br/>
                <label>subject</label>
                <input style={inputstyle} type="text"  name="subject" value={subject} onChange={chnageHandler} /><br></br>
                <label>email</label>
                <input style={inputstyle} type="email" name="email" value={email} onChange={chnageHandler} /><br/>
                <input type="submit" name="submit" />
            </form>
            
        </div>
    )
}

export default Userdata
