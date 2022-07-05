import React from "react"
import SearchAlt from "@styled-icons/boxicons-regular"

function Search(props){

    const[inputValue, setInputValue] = React.useState('');

    function onChange(event){
        setInputValue(event.target.value);
    }

    function onClick(event){
        console.log(inputValue);
        setInputValue("");
    }

    return(
        <div>
            <input className="search-bar" type="text" onChange={onChange} value={inputValue} name={props.name} placeholder={props.placeholder}/>
            <input className="search-bar-btn" type="button" onClick={onClick}/>
            <SearchAlt />
        </div>
    )
}

export default Search