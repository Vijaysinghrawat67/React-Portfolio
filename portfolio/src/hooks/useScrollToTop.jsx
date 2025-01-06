import { useState, useEffect } from "react";
import {FiChevronUp} from 'react-icons/fi';

const useScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', useScrollToTop);
        return function cleanup(){
            window.removeEventListener('scroll', useScrollToTop);
        };
    });

    const useScrollToTop = () => {
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true);
        } else if (!showScroll && window.pageXOffset <= 400){
            setShowScroll(false);
        }
    };

    const backToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth',
        });
    };

    window.addEventListener('scroll', useScrollToTop);

    return(
        <>
             <FiChevronUp
             className="scrollToTop"
             onClick={backToTop}
             style={{
                height : 45,
                width : 45,
                borderRadius : 50,
                right : 50,
                bottom : 50,
                display : showScroll ? 'flex' : 'none',
                padding : 5,
             }}
             />
        </>
    );

};

export default useScrollToTop;