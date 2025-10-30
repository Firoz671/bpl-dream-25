import React from 'react';

const ShowSelected = ({playerData,removePlayer}) => {
    const {playerImage,name,role} = playerData;
    const handleRemove = ()=>{
        removePlayer(playerData)
    }
    return (
<div className='max-w-[1200px] mx-auto mt-5 shadow-md rounded-lg p-5'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <div>
                        <img className='size-[50px] rounded-lg' src={playerImage} alt="" />
                    </div>
                    <div className='flex flex-col'>
                        <span>{name}</span>
                        <span>{role}</span>
                    </div>
                </div>
                <div>
                    <button onClick={handleRemove   } className='btn'>Delete</button>
                </div>
            </div>
        </div> 
    );
};

export default ShowSelected;