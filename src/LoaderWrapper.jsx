import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './Pages/Loader';
const LoaderWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation(); 
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);  
        }, 1000); 

        return () => clearTimeout(timer);
    }, [location]);
    return (
        <>
            {loading && <Loader />}
            {children}
        </>
    );
};
export default LoaderWrapper;