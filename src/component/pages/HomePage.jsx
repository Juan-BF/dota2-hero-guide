import React, { useContext } from "react";
import { HeroContext } from "../context/HeroContext";
import { HeroCard } from "../CardHero";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { allHeroes } = useContext(HeroContext);
  console.log(allHeroes);

//para solucionar unos resultados que no corresponde a nombres d eheroes
  const heroeDisplayName = allHeroes.filter((hero) => hero.displayName);

  return (
    <div>
      <ul>
        {heroeDisplayName.map((ShortName, id) => (
           <Link to={`/${ShortName.shortName}`}>
          <li key={id}>
            {<HeroCard heroShortName={ShortName.shortName} />}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export { HomePage };
