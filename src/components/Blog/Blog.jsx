import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='custom'>
            <b> 1.what is custom hook in react?</b>
            <p>
            Ans: When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
            </p>
            </div>

            <div className='custom'>
                <b>2.when we use context api in react?</b>
                <p>
                 Ans: The Context API helps share data between components which you can't easily share with props.when we need to transfer data in various components context api helps us to transfer data.
                </p>
            </div>
            <div className='custom'>
                <b>3.what is useref in react?</b>
                <p>
                 Ans: The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                </p>
            </div>
            <div className='custom'>
                <b>4.what is usememo in react?</b>
                <p>
                 Ans: React useMemo() hook is a function that caches the value produced from an expensive function used inside a React component
                </p>
            </div>
        </div>
    );
};

export default Blog;