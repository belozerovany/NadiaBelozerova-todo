import React from 'react';
import ReactDom from 'react-dom';
import'./number.scss';

export const Number = (props) =>{
    let i = +props.from;
    let x = +props.to;
    let arr = [];
    

    for(i; i <= x;i++){
        arr.push(i);
    };

    if(props.odd){
        arr = arr.filter(elem => elem % 2 == 0);
        console.log(arr);
    } 
    return(
        <ul className="numbers"> 
            {
            arr.map((elem,i) => <li key ={i}>{elem}</li>)
            }   
        </ul>
        
    );
}