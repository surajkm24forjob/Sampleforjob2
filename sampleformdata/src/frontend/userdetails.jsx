 import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";

export default function UserNew () {
   
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const Url = import.meta.env.PORT;
  
    useEffect(() => {
      // Fetch user details when the component mounts
      const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`${Url}/backend/userdata`);
          setUsers(response.data); // Store user details in state
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch user details'+ err);
          setLoading(false);
        }
      };
  
      fetchUserDetails();
    }, []);  // Empty dependency array means this runs once when the component mounts
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }


  return (
    <>
    <Navbar/>
     <div className="user-details">
   
    <table className="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th>Name</th>
          <th>Social Media Handle</th>
          <th>Files</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.socialmediahandle}</td>
            <td>
              {user.files && user.files.length > 0 ? (
                user.files.map((file, idx) => (
                  <a key={idx} href={`http://localhost:3001/${file}`} target="_blank" rel="noopener noreferrer">
                    View File {idx + 1}
                  </a>
                ))
              ) : (
                <span>No files uploaded</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </>
   
  )
}
