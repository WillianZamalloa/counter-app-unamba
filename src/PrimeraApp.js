import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subti } ) =>{
    
    //console.log(props);
    return(
        <>
            <h1>{ saludo }</h1>
            <p>{ subti }</p>
        </>
    );

}

PrimeraApp.propTypes ={
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    saludo: "Charly, Charly...",
    subti: ''
}
export default PrimeraApp;
