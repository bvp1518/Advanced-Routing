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

// import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    // const events = useLoaderData();

    return <EventsList />
}

export default EventsPage;