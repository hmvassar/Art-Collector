import React from 'react';

const Loading = ({isLoading}) => {
    if (isLoading) {
        return(
    <div id="loading">
        <h2 className="message">Searching...</h2>
    </div>
    )
    } else {
        return null
    }
}

export default Loading;