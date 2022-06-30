import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventId() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    console.log(event)
    if (!event) {
        return <p>No event Found</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics
                date={event.date}
                image={event.image}
                imageAlt={event.title}
                address={event.location}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default EventId;