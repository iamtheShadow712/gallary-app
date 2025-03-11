import './GallaryItem.css'

const GallaryItem = ({ item }) => {
    return (
        <div className='gallaryItem' style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }} >
            <img src={item.media} alt="" />
        </div>
    )
}

export default GallaryItem