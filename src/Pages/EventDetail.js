
import { useParams } from "react-router-dom";

function EventDetailPage() {
   const params = useParams();

    return (
        <>
        <h1> EventsDetail Page</h1>
        <p>Event Id: {params.eventId}</p>
        </>
    )
}

export default EventDetailPage;