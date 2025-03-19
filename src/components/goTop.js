import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

const GoTop = (props) => {
    const [scrollPosition, setSrollPosition] = useState(0);

    const [ showGoTop, setShowGoTop ] = useState( false )

    const handleVisibleButton = () => {
        setShowGoTop( window.pageYOffset > 50 )
    }
    
    const handleScrollUp = () => {
        window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
    }
    //SCROLL LISTENER
    useEffect(() => {
        const e = window.addEventListener("scroll", handleVisibleButton);
        return () => window.removeEventListener('scroll', handleVisibleButton);
    });


    return (
        <>
            <div className={ showGoTop ? '' : 'goTopHidden' } onClick={ handleScrollUp }>
                <Button className="goTop" onClick={props.scrollUp}>
                    <FontAwesomeIcon icon={faCircleChevronUp} />
                </Button>
            </div>
        </>
    );
};

export default GoTop;