import React from 'react'
import './Tile.css';

interface Props {
    image?: string;
    number: number;
}

export default function Tile({ number, image }: Props) {
    if (number % 2 === 0) {
        return (
            <div className='tile black-tile'>
                <img className='img' src={image} alt='' />
            </div>
        );
    } else {
        return (
            <div className='tile white-tile'>
                <img className='img' src={image} alt='' />
            </div>
        );
    }
}
