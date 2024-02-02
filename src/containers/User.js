import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const User = () => {
    const { username } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is signed in when the component mounts
        const isUserSignedIn = () => {
            const token = localStorage.getItem('token');
            return !!token;
        };

        // Get the username of the currently logged-in user
        const loggedInUsername = localStorage.getItem('username');

        // Redirect the user to the login page if they are not signed in
        if (!isUserSignedIn()) {
            navigate('/login');
        } else {
            // Check if the username from the URL matches the signed-in user's username
            if (username !== loggedInUsername) {
                navigate('/unauthorized');
            }
        }
    }, [username, navigate]);

    return (
        <>
            <h1>User Profile: {username}</h1>
            {/* Add profile content here */}
        </>
    );
};

export default User;
