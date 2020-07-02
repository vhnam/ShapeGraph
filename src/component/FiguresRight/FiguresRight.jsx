import React from 'react'
import './FiguresRight.css';

const FiguresRight = () => {
    return (
        <section className="Figures col-3">
           <div>
               <span>x: </span>
               <input id="text_x" type="text"></input>
            </div>
            <div>
               <span>y: </span>
               <input id="text_x" type="text"></input>
            </div>
        </section>
    );
}

export default FiguresRight;