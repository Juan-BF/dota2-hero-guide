import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { DivSearch } from "./StyleNavigation";
import { HeroContext } from "./context/HeroContext";

const Navigation = () => {
  const context = useContext(HeroContext)

  // console.log(context)



  
  return (
    <>
      <header>
        <Link to="/">
          <img
            src="https://www.pngplay.com/wp-content/uploads/10/Dota-2-Logo-Free-PNG.png"
            alt="imagen de logo dota 2"
          />
        </Link>
      </header>
      <div>
        <h1>ELIGE A TU HÉROE</h1>
        <h2>
          Estrategas de la magia, feroces bestias, astutos pícaros... El
          conjunto de héroes de Dota 2 es enorme y de una diversidad ilimitada.
          Lanza increíbles hechizos y devastadoras habilidades definitivas en tu
          camino hacia la victoria.
        </h2>
      </div>

      <form>
        <div>
          <h1>FILTRAR HERÓIS</h1>
          <DivSearch>
            <h1>ATRIBUTO</h1>
            <input
              className="desactivo"
              type="checkbox"
              id="fuerza"
              name="atributo"
              value="str"
            />
            <label htmlFor="fuerza">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png"
                alt="imagen de fuerza"
              />
            </label>
            <input type="checkbox" id="agilidad" name="atributo" value="agi" />
            <label htmlFor="agilidad">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png"
                alt=""
              />
            </label>
            <input
              type="checkbox"
              id="inteligencia"
              name="atributo"
              value="int"
            />
            <label htmlFor="energia">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png"
                alt="imagen de energia"
              />
            </label>
            <input type="checkbox" id="universal" name="atributo" value="uni" />
            <label htmlFor="universal">
              <img
                src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png"
                alt="icono universal"
              />
            </label>
          </DivSearch>

          <div>
            <h1>COMPLEXIDADE</h1>
            <input
              type="checkbox"
              id="difficulty1"
              name="difficulty"
              value={1}
            />
            <label htmlFor="difficulty1" className="imd">
              <img
                src="ruta_de_la_imagen1.png"
                alt="Descripción de la imagen 1"
              />
            </label>

            <input
              type="checkbox"
              id="difficulty2"
              name="difficulty"
              value={2}
            />
            <label htmlFor="difficulty2" className="imd">
              <img
                src="ruta_de_la_imagen2.png"
                alt="Descripción de la imagen 2"
              />
            </label>

            <input
              type="checkbox"
              id="difficulty3"
              name="difficulty"
              value={3}
            />
            <label htmlFor="difficulty3" className="imd">
              <img
                src="ruta_de_la_imagen3.png"
                alt="Descripción de la imagen 3"
              />
            </label>
          </div>
        </div>
      </form>

      <Outlet />
    </>
  );
};

export { Navigation };
