import { useState } from 'react';
import './UserButton.css'

const UserButton = () => {
    const [open, setOpen] = useState(false)

    const currentUser = true;
    const openUserOption = () => {
        setOpen(prev => !prev)
    }

    return currentUser ? (
        <div className='userButton'>
            <img onClick={openUserOption} src="/icons/avatar.svg" alt="" className='avatar' />
            {open && (
                <div className='userOptions'>
                    <div className="userOption">Profile</div>
                    <div className="userOption">Setting</div>
                    <div className="userOption">Logout</div>
                </div>
            )}
        </div>
    ) : (<a href='/' className='loginLink'>Login/Signup</a>)
}

export default UserButton