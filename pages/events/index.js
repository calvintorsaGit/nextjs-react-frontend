import {getFeaturedEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";

function EventsPage() {
    const featuredEvents = getFeaturedEvents()

    return (
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}
export default EventsPage;