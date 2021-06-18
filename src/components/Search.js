import axios from 'axios';
import React, {useState, useEffect} from 'react';

const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    

    useEffect(() => {
        const search = async () => {
            // 解構 只拿取回應中 data的值
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            });
            
            setResults(data.query.search);
        }

        if (term && !results.length){ // 解決最初載入時，第一次搜索還得等上一秒的不佳體驗
            search();
        }else{
            const timeID = setTimeout(() => {
                if(term){ //避免空值送出搜索 api會報錯且拿回的東西沒有search 直接undefined
                    search();
                }
            }, 1000)
    
            return () => {
                clearTimeout(timeID);
            }
        }
    }, [term])

    const renderResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button"> GO </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return (
        <>
        <div className="ui form">
            <div className="field">
                <label htmlFor="keyword">輸入搜尋字詞</label>
                <input id="keyword" type="text" className="input" onChange={e => setTerm(e.target.value)} value={term} />
            </div>
            
        </div>
        <div className="ui celled list">{renderResults}</div>
        </>
    )
}


export default Search;