import React, { useEffect, useState } from "react";
import { GetHeroeInformation } from "../services/HeroeApiService.jsx";
import "./estyle.css";

const HeroeData = () => {
  const [datosHero, setDatosHero] = useState({
    detailsHero: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const heroData = await GetHeroeInformation();

      const arrayList = Object.values(heroData);

      const detailedInfoArray = await Promise.all(arrayList.map(async (hero) => {
        const res = hero;
        const nome = hero.displayName;

        console.log(res);
        return nome;
      }));
      
      setDatosHero({
        detailsHero: detailedInfoArray,
      });
    };

    fetchData();
  }, []);

  return (
    <>
      {datosHero.detailsHero.map((nomeHero, index) => (
        <div key={index}>
          {nomeHero}
          {/* <img src={`https://cdn.stratz.com/images/dota2/heroes/${nomeHero}_vert.png`} alt="" /> */}
          {/* {nomeHero} */}
        </div>
      ))}
    </>
  );
};

export default HeroeData;
