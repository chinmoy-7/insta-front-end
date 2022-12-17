import { useEffect, useState } from "react";
import axios from "axios";
import './postview.css'
import Card from "../Components/Card";
import { Link } from "react-router-dom";
const PostView= ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3004/user")
        .then((res)=>{
            setData(res.data)
        })
        .catch((e)=>{
            console.log(e.message);
        })

    },[])
    return(
        <>
            <div className="header-container">
                <header>
                    <div className="header-left">
                        <img src="/imgs/insta.png" alt="Logo" />
                        <h2>Instaclone</h2>
                    </div>
                    <div className="header-right">
                        <Link to="upload"><img src="/imgs/camera.png" alt="" /></Link>
                    </div>
                </header>
            </div>
            
            {data.map((ele,id)=>{
                return(<div className="cards" key={id}>
                    <Card data={ele}/>
                </div>)
            })}

            
        </>
    )
}
export default PostView;