import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

function Details() {
    const history = useHistory()
    const dispatch = useDispatch();

    // grab the details
    const details  = useSelector(store => store.details);

    console.log('what is in the details', details);

   
    const handleClick = () => {
        alert('take me back to movie list');
        history.push('/');
    }

  
    //having trouble with useeffect

    useEffect(() => {
        dispatch({
            type: 'FETCH_DETAILS',
            payload: 2,
        })
    }, []);
     

    return (
        
        <div>   

            <h1>Movie Details</h1>
                        
     <button onClick={handleClick}>Go back</button>
    
        </div>
        
        
      
        
    )
}

export default Details;