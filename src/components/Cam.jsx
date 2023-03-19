import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import '../style.css'

function Cam() {
    const [value, setValue] = useState();

    const navigate = useNavigate();


    const handleJoinRoom = useCallback(() => {
        navigate(`/cam2/${value}`)
    }, [navigate, value])

    return (
        <div className='cambox'>
            <input className='camInput' value={value} onChange={(e) => setValue(e.target.value)}  type="text" placeholder="Enter Your Code"/>
            <button className='cambtn' onClick={handleJoinRoom}>Join</button>
        </div>
    )
}

export default Cam;
