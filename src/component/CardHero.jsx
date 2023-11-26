import React from 'react'

export const HeroCard = ({heroShortName}) => {
  return (
    <div>
      <img src={`https://cdn.stratz.com/images/dota2/heroes/${heroShortName}_vert.png`} alt="imagen" />
    </div>
  )
}


