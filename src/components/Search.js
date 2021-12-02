import React from 'react'
import { useState, useEffect } from 'react'



const Search = () => {
    const [input, setInput] = useState("");
    const [key, setKey] = useState("");
    const [output, setOutput] = useState([]);
    const [active, setActive] = useState([])

    const downUp = e => {
        if(input === "") return;
        if(e.key === 'Enter') {
            setOutput(prev => [...prev, input]);
            setInput('');
        }
        
    }



    useEffect(() => {
        const check = document.getElementsByClassName("js-check") 
            
        const type = document.getElementsByClassName("js-button")

        for(var i = 0; i < type.length; i++) {
            type[i].addEventListener('click', e => {
                
                switch(e.target.innerText) {
                    case "ViewAll": {
                        if(document.querySelector(".check").checked) {
                            document.querySelector(".part1").classList.add("colorh")
                            document.querySelector(".part2").classList.add("colorg")
                            document.querySelector(".part3").classList.add("colorg1")
                        }
                        break;
                    }
                    case "Active": {
                        if(document.querySelector('.check1').checked) {
                            document.querySelector(".part2").classList.add("colorh")
                            document.querySelector(".part1").classList.add("colorg")
                            document.querySelector(".part3").classList.add("colorg1")
                        }
                        break;
                    }
                    case "Completed": {
                        if(document.querySelector('.check2').checked) {
                            document.querySelector(".part2").classList.add("colorh")
                            document.querySelector(".part1").classList.add("colorg")
                            document.querySelector(".part3").classList.add("colorg1")
                        }
                        break;
                    }
                    default: {
                        new Error("Error Syntax !")
                    }
                }
            })
        }
    }, [])

    const checkInto = () => {
        const content = document.getElementsByClassName("js-content")
        const check = document.getElementsByClassName("js-check")


        for(var i = 0; i < check.length ; i++) {
            for(var j = 0; j< content.length; j++) {
                if(i===j) {
                    if(check[i].checked && content[j]) {
                        check[i].classList.add("switch_color")
                        content[j].classList.add("across-m")
                        content[j].classList.add("colorg")
                    }
                    else {
                        check[i].classList.remove("switch_color")
                        content[j].classList.remove("across-m")
                        content[j].classList.remove("colorg")
                    }
                }
            }
        }   

    }

    const writeContent = () => {
        const other = document.getElementsByClassName("cicl");
        const gohan = document.getElementsByClassName("gohan")
        const cancel = document.getElementsByClassName("cancel");

        for(var i = 0; i < gohan.length; i++) {
            for(var l = 0; l < cancel.length; l++) {
                for(var z = 0; z < other.length; z++) {
                    if(i===l && l===z) {
                        gohan[i].classList.add("appear");
                        cancel[l].classList.add("open");
                        other[z].classList.add("appear");

                        checkInto()
                    }
                }
            }
        }
    }

    //thay doi the span thanh the input
    const replaceContent = () => {
        const godo = document.getElementsByClassName("js-do")
        const write = document.getElementsByClassName("js-content")
        const input = document.getElementsByClassName("js-input")

        for(var i = 0; i < godo.length; i++) {
            for(var k = 0; k < write.length; k++) {
                for(var j = 0; j < input.length; j++) {
                    if(i===k && k===j) {
                        if(godo[i].checked) {
                            write[k].classList.toggle("appear1")
                            input[j].classList.toggle("open1")
                        }
                    }
                }
            }
        }
    }
    //day laf x
    const cancelContent = () => {
        const cls = document.getElementsByClassName('cicl')
        const check = document.getElementsByClassName("gohan")
        const block = document.getElementsByClassName("cancel")
        
        for(var i = 0; i < check.length; i++) {
            for(var k = 0; k < cls.length; k++) {
                for(var j = 0; j < block.length; j++) {
                    if(k===i && i===j) {
                        block[j].classList.add("appear2")
                        cls[k].classList.add("open2")
                        check[i].classList.add("open")
                        checkInto()
                    }
                }
            }
        }
    }


    const deliverGarbage = () => {
        const global = document.querySelector(".js-log")
        const content = document.getElementsByClassName("search__content")
        
        
    }

    return (
        <div className="search">
            <div className="search__mains">
                <div className="search__mains1">
                    <input
                        type="text"
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        className="search__mains--input"
                        placeholder="What needs to be done?"
                        onKeyPress={downUp}
                    />
                </div>
                <div className="search__mains2">
                    <div style={{color: "white"}} className="js-button part1 search__mains2--close">
                        ViewAll
                        <input className="check" type="checkbox"/>
                    </div>
                    <span className="set">/</span>
                    <div className="js-button close part2 search__mains2--close">
                        Active
                        <input className="check1" type="checkbox"/>
                    </div>
                    <span className="set">/</span>
                    <div className="js-button close part3 search__mains2--close">
                        Completed
                        <input className="check2" type="checkbox"/>
                    </div>
                </div>
            </div>
            <div className="js-log search__content--global">
                {output.map((arr, index) => (
                    <div key={index} className="clos search__content">

                        <div className="gohan wid">
                            <input
                                type="checkbox"
                                className="js-check circle fas fa-check"
                                onChange={checkInto}
                            />
                        </div>
                        <div className="block">
                            <span
                                onClick={replaceContent}
                                className="js-content search__content--cont vdete"
                            >
                                {arr}
                            </span>
                            <input
                                className="search__content--cont js-input blackga"
                                value={key}
                                onChange={e => setKey(e.target.value)}
                            />
                        </div>

                        <div className="cicl">
                            <div className="wid">
                                <input
                                    type="checkbox"
                                    className="js-do s-write circle fas fa-pen"
                                    onClick={writeContent}
                                />
                            </div>

                            <div className="wid">
                                <input
                                    type="checkbox"
                                    className="js-does circle fas fa-trash"
                                    onChange={deliverGarbage}
                                />
                            </div>
                        </div>

                        <div className="cancel">
                            <input
                                type="checkbox"
                                onClick={cancelContent}
                                className="js-he circle fas fa-times"
                            />
                        </div>
                        <div className="search__content--across"></div>
                    </div>
                ))}
            </div>
        </div>
    )
    
}

export default Search;


