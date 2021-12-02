import React from 'react'
import './fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/all.min.css'

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand__banner">
                <i class="brand__banner--close far fa-circle"></i>     Todo React Redux 
            </div>            
            <div className="brand__login">
                <div className="brand__login--code">Sign out</div>
                <a href="https://github.com/r-park/todo-react-redux" class="brand__obb fab fa-github"></a>    
            </div>
        </div>
    )
}

export default Brand
