import React, { useContext } from 'react';
import profileImg from "../../assets/noImage.jpg"
const Avatar = () => {
    return (
        <div>
            <img src={profileImg} className='rounded-full' height={30} width={30} alt="" />
        </div>
    );
};

export default Avatar;