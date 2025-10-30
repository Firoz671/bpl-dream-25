import React from 'react';
import ShowSelected from './ShowSelected';

const Selected = ({selectedPlayers,removePlayer}) => {
    const playersData = selectedPlayers;
    
    return (
         <div>
         {
            playersData.map(playerData => <ShowSelected removePlayer={removePlayer} playerData={playerData} key={playerData.name}></ShowSelected>)
         }
         </div>
    );
};

export default Selected;