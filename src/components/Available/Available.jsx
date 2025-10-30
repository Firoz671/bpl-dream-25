import React, { use } from "react";
import ShowAvailable from "./ShowAvailable";

const Available = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setSelectedPlayers,
  selectedPlayers,
}) => {
  const playerData = use(playersPromise);
  //console.log(playerData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto mt-10 gap-5">
        {playerData.map((players) => (
          <ShowAvailable
            selectedPlayers = {selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            players={players}
            key={players.name}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
          />
        ))}
      </div>
    </div>
  );
};

export default Available;
