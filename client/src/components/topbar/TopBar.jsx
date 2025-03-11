import UserButton from '../userButton/UserButton'
import './TopBar.css'

const TopBar = () => {
    return (
        <div className='topbar'>
            {/* Search */}
            <div className="search">
                <img src="/icons/search.svg" alt="" className='searchIcon' />
                <input type="text" placeholder='Search' />
            </div>
            {/* User */}
            <UserButton />
        </div>
    )
}

export default TopBar