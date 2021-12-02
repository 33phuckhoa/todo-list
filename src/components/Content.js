import React from 'react'

function Content({arr}) {
    return (
        <div>
            <div className="clos search__content">

                <div className="wid">
                    <input
                        type="checkbox"
                        className="js-check circle fas fa-check"
                    />
                </div>
                <div className="block">
                    <span
                        className="js-content search__content--cont vdete"
                    >
                        {arr}
                    </span>
                    <input
                        className="search__content--cont js-input blackga"
                    />
                </div>

                <div className="cicl">
                    <div className="wid">
                        <input
                            type="checkbox"
                            className="js-do s-write circle fas fa-pen"
                        />
                    </div>

                    <div className="wid">
                        <input
                            type="checkbox"
                            className="js-does circle fas fa-trash"
                        />
                    </div>
                </div>
{/* 
                <div className="cancel">
                    <input
                        type="checkbox"
                        className="js-he circle fas fa-times"
                    />
                </div> */}
                <div className="search__content--across"></div>
            </div>
        </div>
    )
}

export default Content
