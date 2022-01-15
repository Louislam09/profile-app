import React, { useState } from 'react'
import { AppContext } from '../pages/_app'

interface FormProps { }

const useField = (type: string, defaultValue: string) => {
    const [value, setValue] = useState(defaultValue)

    const onChange = (e: any) => {
        setValue(e.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

const Form: React.FC<FormProps> = ({ }) => {
    const { setState } = React.useContext(AppContext);

    const username = useField('text', 'louislam09');
    const requestUrl = (username: string) => `https://bio.torre.co/api/bios/${username}`

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(requestUrl(username.value))
            .then(res => res.json())
            .then(res => setState(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={onSubmit} className='col card text-white bg-transparent mb-5 pt-5 pb-2' >
            <div className='d-flex justify-content-center'>
                <h4 className='p-1 text-center bg-info w-25'>Search Profile</h4>
            </div>
            <div className='row'>
                <div className='col-md-8 d-flex align-items-center justify-content-center w-100'>
                    <div className='form-group w-50'>
                        <label className='mb-2 h5'>Username</label>
                        <input
                            {...username}
                            className='form-control mt-2'
                            name='username'
                            placeholder='username'
                        />
                    </div>
                    <button type='submit' className='btn btn-info ms-2 align-self-end'>Search</button>
                </div>
            </div>
        </form>
    );
}

export default Form;