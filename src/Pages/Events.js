//  import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//     {
//         id: 'e1',
//         title: 'Some event'
//     },
//     {
//         id: 'e2',
//         title: 'Another event'
//     },
// ];

// function EventsPage() {
//     return (
//         <>
//             <h1> Event Page</h1>
//             <ul>
//                 {DUMMY_EVENTS.map((event) => (
//                     <li key={event.id}>
//                         <Link to={event.id}>{event.title}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </>

//     )
// }

// export default EventsPage;

import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const { events } = useLoaderData();

    return (
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
     <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await> 
    </Suspense>
);
}

export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return{ isError : true, message: 'Could not fetch events.'}
    //   throw new Response(JSON.stringify({ message:'could not fetch events.'}),{
    //     status:500,
    //   });
    return json({message:'could not fetch events.'},{
        status:500,
    });

    } else {
        const resData = await response.json();
        return resData.events;
    }
}


export function loader() {
  return defer({
      events: loadEvents()  
    })
   }
