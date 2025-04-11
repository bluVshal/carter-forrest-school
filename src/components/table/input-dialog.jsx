import React, { useState }  from 'react'
import { Dialog } from 'primereact/dialog';

const InputDialog = (props) => {
    
    let { visible, csvOutput } = props; 

    return (
        <div>
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; visible = false; }}>
                <p className="m-0"> { csvOutput }</p>
            </Dialog>
        </div>
    )
}

export default InputDialog