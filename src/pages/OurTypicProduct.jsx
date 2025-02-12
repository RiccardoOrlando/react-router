import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Links } from "react-router-dom";


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
      <div className="container">
        {menu.map((user) => (
          <div key={user.id} className="card">
            <Link to={`/BurgerFromId/${user.id}`}>
            <div className="user">
            {console.log(user.image)} {/* Aggiungi questo log per vedere il valore di user.image */}
              {user.image ? (
                <img src={`http://localhost:3000/${user.image}`} alt="Avatar" />
              ) : (
                <div className="placeholder">No Image Available</div>
              )}
              <div className="container-content">
                <h4>
                  <b>{user.name}</b>
                </h4>
                <p>{user.ingredients}</p>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

  );
}
