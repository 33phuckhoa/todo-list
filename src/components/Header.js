import React from 'react'

function Header({input, setInput}) {
    return (
        <div>
            <div className="search__mains">
                <div className="search__mains1">
                    <input
                        type="text"
                        className="search__mains--input"
                        placeholder="What needs to be done?"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                </div>
                <div className="search__mains2">
                    <div style={{color: "white"}} className="js-button search__mains2--close">
                        ViewAll
                        <input className="check" type="checkbox"/>
                    </div>
                    <span className="set">/</span>
                    <div className="js-button close search__mains2--close">
                        Active
                        <input className="check1" type="checkbox"/>
                    </div>
                    <span className="set">/</span>
                    <div className="js-button close search__mains2--close">
                        Completed
                        <input className="check2" type="checkbox"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
