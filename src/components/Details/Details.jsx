import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Details() {

    const dispatch = useDispatch();

    const details  = useSelector(store => store.details);

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: 2 });
      }, []);

      <>
      
      </>
}

export default Details;