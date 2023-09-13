import React from 'react';
import CardHeading from './CardHeading';
import SocialLinks from './SocialLinks';

const Card = () => {

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <CardHeading/>
            <SocialLinks/>
        </div>
    )
}

export default Card;

// export default function Example() {
//     return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
//   }
  