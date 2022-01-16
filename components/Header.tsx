import React from 'react'
import Form from './Form';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
    return (
        <div className='bg-dark mb-4'>
            <div className='container border-0'>
                <div className='row'>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Header;