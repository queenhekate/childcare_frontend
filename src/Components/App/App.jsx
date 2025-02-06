import React, { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'
import Event from '../Event.js'
import './App.css'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Booking from '../Booking/Booking'
import Footer from '../Footer/Footer';

function App() {

  const [events, setEvents] = useState([])

  const calendarID = process.env.REACT_APP_CALENDAR_ID
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY
  const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN

  const getEvents = (calendarID, apiKey) => {
    function initiate() {
        gapi.client
            .init({
                apiKey: apiKey,
            })

            .then(function () {
                return gapi.client.request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                })
            })

            .then(
                (response) => {
                    let events = response.result.items
                    return events
                },
                function (err) {
                    return [false, err]
                }
            )
    }

    gapi.load('client', initiate)
}

useEffect(() => {
  const events = getEvents(calendarID, apiKey)
  setEvents(events)
}, [])

return <div className="page">
  <div className="page-content">
    <Header />
    <Main />
    <Booking />
    <Footer />
  </div>
  </div>
}

export default App
