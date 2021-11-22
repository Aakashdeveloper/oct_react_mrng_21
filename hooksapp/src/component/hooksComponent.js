import React,{useState,useEffect} from 'react';
import DisplayComponent from './displayComponent';

const url = "https://developerfunnel.herokuapp.com/location";

function HooksComponent(){
    const [title] = useState('React Hooks');
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [city, setCity] = useState()

    const updateCount = () => {
        setCount(count+1)
    }

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

    return(
        <div>
            <h1>{title}</h1>
            <h3>{count}</h3>
            <button onClick={updateCount}>counter</button>
            <h3>{count1}</h3>
            <button onClick={()=>{setCount1(count1+1)}}>counter1</button>
            <DisplayComponent myCity={city}/>
        </div>
    )
}

export default HooksComponent