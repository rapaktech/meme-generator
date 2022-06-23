import './Form.css';
import memesData from '../../data/memesData';

export default function Form () {
    function select () {
        const memesArray = memesData.data.memes;
        console.log(memesArray[Math.floor(Math.random() * memesArray.length)].url);
    }

    return (
        <div className='form'>
            <div className='form--input'>
                <input type='text' placeholder='Enter setup line here' className='form--input-setup'/>
                <input type='text' placeholder='Enter punchline here' className='form--input-punchline'/>
            </div>
            <button onClick={select} className='form--submit'>Get a new meme image 🖼</button>
        </div>
    )
}
