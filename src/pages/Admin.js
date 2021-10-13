import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, db, logout } from "../firebase";
import MapSetter from '../components/MapSetter';

function Admin() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
 
  useEffect(() => {
    const fetchUserName = async () => {
        try {
          const query = await db
            .collection("users")
            .where("uid", "==", user?.uid)
            .get();
          const data = await query.docs[0].data();
          setName(data.name);
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };
    if (loading) return;
    if (!user) return history.replace("/");
    fetchUserName();
  }, [user, loading, history]);
    return (
        <>
            <MapSetter />
         
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingBottom: '30px'}}>
                <div className="dashboard__container">
                    Logged in as
                    <div>{name}</div>
                    <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={logout}>
                Logout
                </button>
            </div>
    </div>
          
        </>
    );
};

export default Admin;
