import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
function Update() {
   const history = useHistory();
   const { id } = useParams();
   const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: ""
   });

   const { name, username, email, phone, website } = user;

   const onInputChange = e => {
      const { name, value } = e.target;
      setUser(prevUser => ({
         ...prevUser,
         [name]: value
      }));
   };

   const onSubmit = async e => {
      e.preventDefault();
      try {
         await axios.put(`http://localhost:3003/users/${id}`, user);
         history.push("/");
      } catch (error) {
         console.error("Error updating user:", error);
      }
   };

   useEffect(() => {
      const loadUser = async () => {
         try {
            const response = await axios.get(`http://localhost:3003/users/${id}`);
            setUser(response.data);
         } catch (error) {
            console.error("Error loading user:", error);
         }
      };

      loadUser();
   }, [id]);
   return (
      <>
         <div className="container">
            <div className="w-75 mx-auto shadow p-5 mt-5">
               <h2 className="text-center mb-4 display-6">Edit A User</h2>
               <form onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                     <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="Enter Your Name"
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="Enter Your Username"
                        name="username"
                        value={username}
                        onChange={e => onInputChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="email"
                        className="form-control form-control-lg mb-3"
                        placeholder="Enter Your E-mail Address"
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="Enter Your Phone Number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                     />
                  </div>
                  <div className="form-group">
                     <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="Enter Your Website Name"
                        name="website"
                        value={website}
                        onChange={e => onInputChange(e)}
                     />
                  </div>
                  <button className="btn btn-warning btn-block">Update User</button>
               </form>
            </div>
         </div>

      </>
   )
}
export default Update;