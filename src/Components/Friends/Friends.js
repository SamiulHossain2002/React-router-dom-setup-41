import React from 'react';
import './Friends.css'
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div >
            <h1>I have some friends.Quantity of friends {friends.length}</h1>

           <div className='friends'>
           {
            friends.map(friend => <Friend
                key={friend.id}
                friend={friend}
            >
                    
                </Friend>)
            }
           </div>
        </div>
    );
};

export default Friends;