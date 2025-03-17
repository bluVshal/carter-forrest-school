import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from './ui/button';

const GoTop = (props) => {
    return (
        <>
            <div>
                <Button className="goTop" onClick={props.scrollUp}>                
                  <FontAwesomeIcon icon={faCircleChevronUp} />
                </Button>
            </div>
        </>
    );
};

export default GoTop;