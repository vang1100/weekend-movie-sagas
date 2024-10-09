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

    const {id} = useParams();
  
    // const {id} unpacks the object. gives us access to id.id
    

    useEffect(() => {
       console.log('what is the id inside use effect?', id);
        dispatch({
            type: 'FETCH_DETAILS',
            payload: id,
        })
    }, []);
     
      //*****//
      // 1. useEffect not displaying all details
      // 2. How do I display the information for each id?
      // 3. Why does it repeat?

    return (
        
        <div>   

            <h1>Movie Details</h1>
            
            
                
                    <img src={details[0].poster}/>
                    < br/>
                    <button onClick={handleClick}>Go back</button>
                    < br/>
                    {details[0].title}
            
                    {details[0].description}  
                
            
            Genre:
            
            <ul>  
             {
            details.map((movie) => {

                return (
                   
                   <li key={movie.id}>
                   {movie.name}  
                   </li>
               
                    
                
                    
                )
            }

            )
           }             
            </ul>
           
                    
    
        </div>
        
        
      
        
    )
}

export default Details;