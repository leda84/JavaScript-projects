import React from 'react';

interface Props {
    title : string;
}

export const Home = (props : Props) => {
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}