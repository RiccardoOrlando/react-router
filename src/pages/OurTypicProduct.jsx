import { useState, useEffect } from "react";
import axios from "axios";


export default function OurTypicProducts() {

  const [menu, setMenu] = useState([]);
  console.log(menu)

  const fetchMenu = () => {
    axios.get("http://localhost:3000/bacheca").then((response) => {   
      setMenu(response.data);
    });
  };
  
  useEffect(fetchMenu, []);

  

     return (
    <>
      <div className="container">
        {menu.map((user) => (
          <div key={user.id} className="card">
            <div className="user">
              <img src={`http://localhost:3000/${user.image}`} alt="Avatar" />
              <div className="container-content">
                <h4>
                  <b>{user.name}</b>
                </h4>
                <p>{user.ingredients}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
