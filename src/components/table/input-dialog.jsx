import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';

const InputDialog = (props) => {
    
    const { visible } = props;
    const handleClick = () => {
        props.onData('Hello from child component!');
      };

    return (
        <div><Dialog header="Header" visible={visible} style={{ background:'#FFF', width: '50vw' }} onHide={() => { if (!visible) return; }}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <button onClick={handleClick}>Send Data</button>
        </Dialog>
        </div>
    )
}

export default InputDialog