import React, {useState, useEffect} from 'react';
import axios from 'axios';

const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({text, language}) => {

    const [translation, setTranslation] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        },500)

        return () => {clearTimeout(timerId)};
    },[text])

    useEffect(() => {
        const translate = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
                params: {
                    q:debouncedText,
                    target:language.value,
                    key:key
                }
            });
            setTranslation(data.data.translations[0].translatedText);
        }
        
        translate();
        
    },[debouncedText, language]);




    return(
        <div>
            <h1 className="ui header">{translation}</h1>
        </div>
    )
}

export default Convert;