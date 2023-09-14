import React from 'react';
import CardHeading from './CardHeading';
import SocialLinks from './SocialLinks';
import Stats from './Stats';
import Tools from './Tools';
import Companies from './Companies';

const Card = () => {

    return (
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 sm:py-6 lg:py-8">
            <CardHeading/>
            <Stats/>
            <Tools/>
            <Companies/>
            <SocialLinks/>
        </div>
    )
}

export default Card;

// export default function Example() {
//     return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
//   }
  