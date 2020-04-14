import React from 'react';

// a "globally" available js object, string, number, etc
const authContext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default authContext;