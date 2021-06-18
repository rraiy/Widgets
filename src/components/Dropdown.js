import React from 'react';

const Dropdown = ({options, selected, onSelectedChange}) => {

   const renderOptions = options.map(option=>{

        if (option.value === selected.value){ //avoid selected item show on the dropdown list
            return null;
        }

        return(
            <div className="item" 
                key={option.value}
                onClick={()=>{onSelectedChange(option)}}
            >
                {option.label}</div>
        )
   })

    return (
        <div className="ui form">
            <div className="field">
                <label htmlFor="" className="label">Select a color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">{renderOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;