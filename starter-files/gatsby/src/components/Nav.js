import React from 'react';
import { Link } from 'gatsby';

function goToSlicemasters() {
    // wait for 2 secoonds
    setTimeout(()=> {
        console.log('Go to Slice Masters!!!');
        navigate('/slicemasters', {replace: true});
    }, 2000)
    
}

export default function Nav (){
    return <nav>
        <ul>
            <li><Link to="/">Hot Now</Link></li>
            <li><Link to="/pizzas">Pizza</Link></li>
            <li><Link to="/">Logo</Link></li>
            <li><Link to="/slicemasters">SliceMasters</Link></li>
            <li><Link to="/order">Order Ahead</Link></li>
            
        </ul>
    </nav>
}