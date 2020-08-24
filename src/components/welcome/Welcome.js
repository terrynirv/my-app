import React from 'react';
import { useParams } from 'react-router-dom'

function Welcome(props) {
    let { params } = useParams({props});
    return (
        <div>
            <h1>Hello, {params}!</h1>
        </div>
    );
}
export default Welcome;