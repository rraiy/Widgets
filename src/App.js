import React, {useState, useEffect} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title:'What is React?',
        content:'React，是一個為資料提供彩現為HTML視圖的開源JavaScript 庫。React視圖通常採用包含以自訂HTML標記規定的其他組件的組件彩現。'
    },
    {
        title:'Why use React?',
        content:'提供了一種子組件不能直接影響外層組件的模型，資料改變時對HTML文件的有效更新，和現代單頁應用中組件之間乾淨的分離。'
    },
    {
        title:'How to use React?',
        content:'因為 component 的邏輯是用 JavaScript 寫的而不是使用其他樣板語言，你可以輕鬆的在你的程式中傳遞複雜的資料而不需將其藏在 DOM 之中。'
    }
]

const options = [
    {
        label:'The  Color Red',
        value:'red'
    },
    {
        label:'The  Color Green',
        value:'green'
    },
    {
        label:'The  Color Blue',
        value:'blue'
    }
]

const App = () =>{

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
    
    return (
        
        <div>
            {/* <Accordion items={items}></Accordion> */}
            {/* <Search></Search> */}
            <button onClick={()=>{setShowDropdown(!showDropdown)}}>show Dropdown</button>
            {
                showDropdown?
                <>
                <Dropdown label="Select a color." options={options} selected={selected} onSelectedChange={setSelected}/>
                <div style={{color:`${selected.value}`}}>The text will change color.</div>
                <br />
                </>
                :null
            }
            <Translate/>  
        </div>
    )

}

export default App;