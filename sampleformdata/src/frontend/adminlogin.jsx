import { useState } from "react"
import axios from 'axios';



export default function Admin  ()  {
  

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');


  const handlesubmit = async(e) =>{
    e.preventDefault();
    console.log(username, password);

    if (!username || !password) {
        alert("Fields Could not be empty");
        return false;
    }

    try {
      const response = await axios.post('http://localhost:3001/backend/login',{
        username,
        password,
      });
      console.log(response.data);
      
      if (response.data.message === 'Admin logged in successfully') {
        console.log(response.data.message);
        alert("Welcome Admin");
        setusername('');
        setpassword('');
        

      } else {
        alert('Admin not logged in');
      }
      } catch (error) {
      console.log("error", error);
    }

  }
 
  return (
    <div className="registeruser">
      <h5>Admin Login</h5>
      <form action="" method="post" onSubmit={handlesubmit} className="form formdisplay mx-auto m-4 p-4 w-100 border rounded-3">
      <div className="mb-3">
        <label htmlFor="" className="form-label">Username</label>
      </div>
      <div className="mb-3">
        <input type="text" placeholder="enter your username" value={username} onChange={(e)=>setusername(e.target.value)} name="username" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Password</label>
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" value={password} name="password" onChange={(e)=>setpassword(e.target.value)} placeholder="enter your password" />
      </div>
      <button type="submit" className="btn btn-success d-flex mx-auto">Login</button>
      </form>
     
    </div>
  )
}
