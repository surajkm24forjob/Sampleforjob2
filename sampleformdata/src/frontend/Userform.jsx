import { useState } from "react"
import axios from 'axios';

export default function Userform  () {

  const [Name, setName]= useState('');
  const [socialmediahandle, setsocialmediahandle] = useState('');
  const [file,setfile] = useState([]);

  const handleFileChange = (e) => {
    setfile(e.target.files);
  };


  const Handlesubmit2 = async(e) =>{
    e.preventDefault();
   
   
    

    if (!Name||!socialmediahandle||!file.length===0) {
      alert("Please fill all the fields");
      console.log("Please fill all the fields");
      return;
    }

    try {

      const formData = new FormData();
      formData.append('name', Name);
      formData.append('socialmediahandle', socialmediahandle);
      for (let i = 0; i < file.length; i++) {
        formData.append("files", file[i]); // Append multiple files
      }
  
      const response = await axios.post(
        'http://localhost:3001/backend/userdata',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log(response.data);
  
      if (response.data.message === "User Data added Successfully") {
        console.log(response.data.message);
        alert("User details added successfully");
      } else {
        alert("User details not added. Try again!");
      }    } catch (error) {
      console.log("error: " + error);
    }


  }


  return (
    <div className="loginuser">
      <h5>User Submission Form</h5>
    <form onSubmit={Handlesubmit2} encType="multipart/form-data" action="" method="post" className="form formdisplay mx-auto m-4 p-4 w-100 border rounded-3" >
      <div className="mb-3">
      <label htmlFor="" className="form-label">Name</label>
      </div>
      <div className="mb-3">
        <input type="text" name="Name" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name here" className="form-control" />
      </div>
      <div className="mb-3">
      <label htmlFor="">Social Media Handle</label>
      </div>
      <div className="mb-3">
      <input type="url" name="socialmediahandle" value={socialmediahandle} onChange={(e)=>setsocialmediahandle(e.target.value)} className="form-control" id="" placeholder="" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Upload Images</label>
      </div>
      <div className="mb-3">
        <input type="file" multiple name="files" onChange={handleFileChange} className="form-control" src="" alt="" />
      </div>
      <button type="submit" className='btn btn-success d-flex mx-auto'>Submit</button>
    </form>
    </div>
  )
}
