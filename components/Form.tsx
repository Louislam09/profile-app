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
        onChange,
        setValue
    }
}

const Form: React.FC<FormProps> = ({ }) => {
    const { setState, currentUser } = React.useContext(AppContext);
    const userInputRef = React.createRef<HTMLInputElement>();

    const username = useField('text', '');
    const requestUrl = (username: string) => `${process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_BASE_URL_PROD}/user/${username}`

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(requestUrl(username.value));
            const data = await response.json();
            username.setValue('')
            setState(data);
        } catch (error) {
            console.log(error)
            setState({ error: 'User not found' });
        }
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
                            // {...username}
                            type='text'
                            onChange={username.onChange}
                            className='form-control mt-2'
                            name='username'
                            placeholder='username'
                            ref={userInputRef}
                            defaultValue={currentUser}
                        />
                    </div>
                    <button type='submit' className='btn btn-info ms-2 align-self-end'>Search</button>
                </div>
            </div>
        </form>
    );
}

export default Form;