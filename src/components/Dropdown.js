import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label,options, selected, onSelectedChange}) => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const onBodyClick = e => {
            if(formRef.current.contains(e.target)){
                return;
            }
            setOpenDropdown(false);
        }

        document.body.addEventListener('click',onBodyClick,{capture: true});

        return () => {
            document.body.removeEventListener('click',onBodyClick,{capture: true});
        }
    },[])

    const renderOptions = options.map(option=>{

        if (option.value === selected.value){ //avoid selected item show on the dropdown list
            return null;
        }

        return(
            <div className="item" 
                key={option.value}
                onClick={()=>{onSelectedChange(option)}}>
                {option.label}</div>
        )
    })


    return (
        
        <div ref={formRef} className="ui form">
            <div className="field">
                <label htmlFor="" className="label">{label}</label>
                <div
                    onClick={()=>setOpenDropdown(!openDropdown)}
                    className={`ui selection dropdown ${openDropdown ? 'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${openDropdown ? 'visible transition':''}`}>{renderOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;