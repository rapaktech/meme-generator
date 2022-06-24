import './Main.css';
import React from 'react';
import memesData from '../../data/memesData';

export default function Form () {
    const allMemeImages = memesData.data.memes;
    let meme = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
    meme = {
        topText: '',
        bottomText: '',
        randomImage: meme.url,
        name: meme.name
    }

    const [memeImage, setMemeImage] = React.useState(meme);
    
    function changeMemeImage () {
        meme = allMemeImages[Math.floor(Math.random() * allMemeImages.length)];
        meme = {
            ...meme,
            randomImage: meme.url,
            name: meme.name
        }
        setMemeImage(meme);
    }

    return (
        <main className='main'>
            <div className='main--input'>
                <input type='text' placeholder='Enter setup line here' className='main--input-setup'/>
                <input type='text' placeholder='Enter punchline here' className='main--input-punchline'/>
            </div>
            <button onClick={changeMemeImage} className='main--submit'>Get a new meme image 🖼</button>
            <img src={memeImage.randomImage} alt={memeImage.name} className='main--meme-image' />
        </main>
    )
}
