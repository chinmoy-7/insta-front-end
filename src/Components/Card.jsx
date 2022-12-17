import './card.css'
const Card = ({data})=>{
    console.log(data)
    return(
        <>
            <div className="card-container">
                <section className='card-top'>
                    <div className="card-top-left">
                        <h1>{data.name}</h1>
                        <p>{data.location}</p>
                        </div>
                    <div className="card-top-right"><h1>...</h1></div>

                </section>
                <section className='card-mid'>
                    <img src={data.PostImage} alt="Post" />
                </section>
                <section className='card-bottom '>
                    <div className="card-bottom-top">
                        <div className="card-bottom-top-left">
                               <img src="/imgs/heart.png" alt="like" />
                               <img src="/imgs/send.png" alt="comment" />
                        </div>
                        <div className="card-bottom-top-right">
                              Date
                        </div>
                    </div>
                    <div className="likes">
                    <p>{data.likes}</p>
                    <h4>{data.description}</h4>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Card;