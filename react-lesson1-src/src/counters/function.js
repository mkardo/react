import React, {useState} from 'react';

export default function(props){
    let [cnt, setCnt] = useState(0);

    let increase = () => {
        setCnt(cnt + 1);
    };

    return (
        <div>
            <strong>{cnt}</strong>
            <br/>
            <button onClick={increase}>Plus 1</button>
        </div>
    );
}