import { useEffect, useState } from "react";
import { HeroContext } from "./HeroContext";
import { ApiHeroDota } from "../services/HeroeApiService.jsx";
import { ApiAbilityHeroes } from "../services/AbilitysApiService.jsx";
import { useParams } from "react-router-dom";

export const HeroProvider = ({ children }) => {
  const [allHeroes, setAllHeroes] = useState([])




  // const [hero, setHero] = useState({
  //   displayName: "",
  //   bio: "",
  //   bioHype: "",
  //   attackType: "",
  //   attackRange: "",
  //   complexity: "",
  //   shortName: "",
  // });

  // const [atributoHero, setAtributosHero] = useState({
  //   AttributePrimary: "",
  //   strengthBase: "",
  //   strengthGain: "",
  //   intelligenceBase: "",
  //   intelligenceGain: "",
  //   agilityBase: "",
  //   agilityGain: "",
  //   moveSpeed: "",
  // });

  // const [skill, setSkill] = useState({
  //   slot1: 1,
  //   abilityId1: 5007,
  //   slot2: 2,
  //   abilityId2: 5006,
  //   slot3: 3,
  //   abilityId3: 5007,
  //   slot4: 4,
  //   abilityId4: 5009,
  //   slot5: 5,
  //   abilityId5: 5002,
  //   slot6: 6,
  //   abilityId6: 5003,
  // });
  // const { heroName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const objHero = await ApiHeroDota();
      // const abilitiHero = await ApiAbilityHeroes();
      const arrayHero = Object.values(objHero);

      // const barray = arrayHero.find((ability) => ability.id === heroName )
     
      // console.log(abilitiHero[skill.abilityId1]);

      const heroe = await Promise.all(
        arrayHero.map(async (result) => {
          const abilities = result.shortName;
          // console.log(abilities)
          return abilities;
        })
      );
     setAllHeroes(arrayHero);
    
        
      
    };

    fetchData();
  }, []);
  // console.log(allHeroes)
  return (
    <HeroContext.Provider value={{ allHeroes }}>{children}</HeroContext.Provider>
  );
};
