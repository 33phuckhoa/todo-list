import React from 'react'
import { useState, useEffect } from 'react'
import Header from './Header';
import Content from './Content';


const Search = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);

    const downUp = e => {
        if(input === "") return;
        if(e.key === 'Enter') {
            setOutput(prev => [...prev, input]);
            setInput('');
        }
        
    }


    return (
        <div className="search">
            <Header input={input} setInput={setInput}/>
            <div className="js-log search__content--global">
                {output.map((arr, index) => (
                    <Content
                        arr={arr}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
    
}

export default Search;


