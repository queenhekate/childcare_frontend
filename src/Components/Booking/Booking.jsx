import React, { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
  
  function Booking() {
    return(
    <ul>
        {events?.map((event) => (
        <li key={event.id} className="flex justify-center">
        <Event description={event.summary} />
        </li>
         ))}
        </ul>
    )
  }

  export default Booking