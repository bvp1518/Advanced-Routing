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

import { useLoaderData,json } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();

    // if(data.isError) {
    //     return <p>{data.message}</p>
    // }
    const events = data.events;

    // console.log("events",events);
    

    return <EventsList events={events} />
}

export default EventsPage;

export async function loader() {
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
        return response;
    }
}
