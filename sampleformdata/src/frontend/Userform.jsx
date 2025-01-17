import { useState } from "react"


export default function Userform  () {

  const [Name, setName]= useState('');
  const [socialmediahandle, setsocialmediahandle] = useState('');
  const [file,setfile] = useState('');

  const Handlesubmit2 = async() =>{
    
    if (!Name||!socialmediahandle||!file) {
      alert("Please fill all the fields");
      console.log("Please fill all the fields");
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
        <input type="text" name="name" value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name here" className="form-control" />
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
        <input type="file" name="file" value={file} onChange={(e)=>setfile(e.target.value)} className="form-control" src="" alt="" />
      </div>
      <button type="submit" className='btn btn-success d-flex mx-auto'>Submit</button>
    </form>
    </div>
  )
}
