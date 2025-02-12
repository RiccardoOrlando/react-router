import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BurgerFromId() {
  const [burger, setBurger] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/bacheca/${id}`).then((response) => {
      console.log(response);
      setBurger(response.data);
    });
  }, [id]);

  console.log(burger);

  return (
    <>
      <div className="container">
        <img
          src={`http://localhost:3000${burger.image}`}
          alt=""
          className="w-full object-cover"
        />
        <div className="text-5xl font-bold">{burger.name}</div>
        <div className="grid grid-cols-3 gap-4">
          <h3 className="text-2xl font-black col-span-3 text-center">
            Il nostro segreto? Qualità e Passione!
          </h3>
          <p className="col-span-3">
            Ogni hamburger che serviamo nasce dall'amore per il buon cibo e
            dalla ricerca della perfezione. Utilizziamo solo carne di alta
            qualità, pane soffice e artigianale, formaggi irresistibili e salse
            fatte in casa, per offrirti un'esperienza che va oltre il semplice
            fast food.
          </p>
          <p className="col-span-2 col-start-1 bg-[#1c1f2b] text-white rounded-xl box-main-text flex justify-center items-center flex-col">
            {burger.description}
            <div className="text-2xl font-bold">
              <div>Prezzo: {burger.price}</div>
            </div>
          </p>
          <p className="col-span-1 col-start-3 bg-[#1c1f2b] text-white  rounded-xl box-main-text">
            <div>
              <div className="text-2xl font-bold">Ingredienti:</div>{" "}
              <div className="text-gray-3hjj00">{burger.ingredients}</div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
