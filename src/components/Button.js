import React, {useState} from 'react';
import './Button.css';

function Button(props){
    let tmp=0;

    const [sum, setSum] = useState(0);

    props.expenseItems.forEach(total);
    
    function total(item){
        tmp+=item.amt;
    } 
    const totalHandler = () => {
        setSum(() => tmp); //it automatically get previous state, so we can take it as parameter
    }

    return (
        <button onClick={totalHandler}>Total: {sum}</button>
    );
}

export default Button;