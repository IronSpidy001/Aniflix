import React from "react"

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
            <input type="text" onChange={onChange} value={inputValue} name={props.name} placeholder={props.placeholder}/>
            <input type="button" onClick={onClick}/>
        </div>
    )
}

export default Search