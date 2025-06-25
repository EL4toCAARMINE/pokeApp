import React from 'react';
import { useNavigate } from 'react-router';

export default function NotFound() {
    const navigation = useNavigate();

    const backToHome = () => {
        navigation(-1);
    }

    return (
        <div className='notFoundScreen'>
            <h2>404 Not Found</h2>
            <div className="backButton" onClick={backToHome}>Volver a inicio</div>
        </div>
    )
}