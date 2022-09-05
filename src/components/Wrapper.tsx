import React from 'react';

const Wrapper = (props) => {

    return(
        <>
        <button
      className=''
      type='button'
      onClick={props.onClick}
    >
      {props.children}
    </button>
        </>
    )
}

export default Wrapper

