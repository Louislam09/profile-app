import React from 'react'

interface SpinnerProps {
    color?: string;
    size?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color, size }) => {
    return (
        <div className={`spinner-border ${color || 'text-primary'}`} role="status" style={{ width: size || '40px', height: size || '40px' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    );
}

export default Spinner;