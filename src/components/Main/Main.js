import './Main.css';
import React from 'react';

export default function Form () {
    const [memesData, setMemesData] = React.useState([]);
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                const allMemeImages = data.data.memes;
                setMemesData(allMemeImages)
            })
    }, []);

    const [memeImage, setMemeImage] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/1c1uej.jpg',
        altText: 'Sad Pablo Escobar'
    });

    function handleChange (event) {
        const {name, value} = event.target;
        setMemeImage(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    
    function changeMemeImage () {
        const meme = memesData[Math.floor(Math.random() * memesData.length)];
        setMemeImage(prevState => ({
            ...prevState,
            randomImage: meme.url,
            altText: meme.name,
        }));
    }

    return (
        <main className='main'>
            <div className='main--form'>
                <div className='main--form-input'>
                    <input type='text' placeholder='Enter setup line here' className='main--form-input-setup' name='topText' value={memeImage.topText} onChange={handleChange}/>
                    <input type='text' placeholder='Enter punchline here' className='main--form-input-punchline' name='bottomText' value={memeImage.bottomText} onChange={handleChange} />
                </div>
                <button onClick={changeMemeImage} className='main--form-submit'>Get a new meme image 🖼</button>
            </div>
            <div className='main--meme'>
                <img src={memeImage.randomImage} alt={memeImage.altText} className='main--meme-image' />
                <h2 className='main--meme-text top'>{memeImage.topText}</h2>
                <h2 className='main--meme-text bottom'>{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}
