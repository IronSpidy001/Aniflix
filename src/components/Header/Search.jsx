import React from "react"

function Search(props){

    const[inputValue, setInputValue] = React.useState('');

    function onChange(event){
        setInputValue(event.target.value);
    }

    function onEnter(){
        console.log(inputValue);
        setInputValue("");
    }

    window.addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            onEnter();
        }
    })

    return(
        <div>
            <input className="search-bar" type="text" onChange={onChange} value={inputValue} name={props.name} placeholder={props.placeholder}/>

        </div>
    )
}

export default Search