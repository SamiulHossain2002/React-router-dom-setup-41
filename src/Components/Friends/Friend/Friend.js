import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, email, username}= friend;
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p> UserName: <Link to={`/friend/${id}`}>{username}</Link></p>
        </div>
    );
};

export default Friend;