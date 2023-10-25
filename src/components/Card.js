import React from 'react';

const Card = ({
    date, name
}) => {
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg my-2">
            <div className="px-6 py-4">
                <div className="font-bold text-l mb-2">{date}</div>
                <p className="text-gray-700 text-base">
                    {name}
                </p>
            </div>
        </div>
    );
};

export default Card;
