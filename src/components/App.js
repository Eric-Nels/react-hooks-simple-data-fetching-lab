import React, {useEffect, useState} from "react";

const url = 'https://dog.ceo/api/breeds/image/random'
function App() {
    const [imgSrc, setImSrc] =useState('')

    useEffect(()=> {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setImSrc(data.message)
        })
    }, [])

    return (imgSrc === '' ? <p>Loading...</p> : <img src={imgSrc} alt="A Random Dog" />);
    
}

export default App;



