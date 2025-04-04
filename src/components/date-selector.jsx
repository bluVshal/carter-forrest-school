import React, { useState } from 'react'
import { Calendar } from 'primereact/calendar';

const DateSelector = () => {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar id="calendar-picker" value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}

export default DateSelector;