import React, { useState } from "react";
import playerIcon from "../../assets/user.png";
import countryIcon from "../../assets/report.png";
import { toast } from "react-toastify";

const ShowAvailable = ({ players, setAvailableBalance, availableBalance,selectedPlayers,setSelectedPlayers }) => {
  const {
    playerImage,
    name,
    country,
    role,
    rating,
    battingStyle,
    bowlingStyle,
    price,
  } = players;

  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""))
    if(availableBalance<playerPrice){
        toast('Not Enough Balance')
        return 
    }
    if(selectedPlayers.length === 6){
        toast("Six player already added")
        return
    }
    setIsSelected(true);
    setAvailableBalance(
      availableBalance - playerPrice
        
    );
    setSelectedPlayers([...selectedPlayers,playerData])
    toast("Player Added")
  };
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-sm ">
        <figure className="px-9 pt-9">
          <img
            src={playerImage}
            alt="Shoes"
            className="rounded-xl h-100 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span>
              <img src={playerIcon} alt="" />
            </span>{" "}
            {name}
          </h2>

          <div className="flex items-center gap-[15px] border-b border-gray-300 pb-2">
            <img className="" src={countryIcon} alt="" />
            <p>{country}</p>
            <button className="btn">{role}</button>
          </div>

          <div className="flex justify-between">
            <span>Rating: </span>
            <span>{rating}</span>
          </div>
          <div className="flex justify-between">
            <span>{battingStyle}</span>
            <span>{bowlingStyle}</span>
          </div>

          <div className="card-actions flex items-center">
            <p>{price}</p>
            <button
              disabled={isSelected}
              onClick={() => {
                handleSelected(players);
              }}
              className="btn "
            >
              {isSelected ? " Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAvailable;
