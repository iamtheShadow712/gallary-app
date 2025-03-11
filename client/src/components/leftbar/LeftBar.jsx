import './LeftBar.css'

const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className="menuIcons">
                <a href="/" className='menuIcon'>
                    <span className='logo'>G</span>
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/icons/home.svg" alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/icons/create.svg" alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/icons/update.svg" alt="" />
                </a>
                <a href="/" className='menuIcon'>
                    <img src="/icons/messages.svg" alt="" />
                </a>
            </div>
            <a href="/" className='menuIcon'>
                <img src="/icons/settings.svg" alt="" />
            </a>
        </div>
    )
}

export default LeftBar