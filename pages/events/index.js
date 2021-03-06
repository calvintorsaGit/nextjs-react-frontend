import {getAllEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import {Fragment} from "react";
import {useRouter} from "next/router";
import EventsSearch from "../../components/events/events-search";

function EventsPage() {
    const featuredEvents = getAllEvents()
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (<Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={featuredEvents}/>
        </Fragment>
    )
}

export default EventsPage;