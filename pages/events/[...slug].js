import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import {Fragment} from "react";
import ResultsTitle from "../../components/result-title/results-title";
import EventList from "../../components/events/event-list";

function filteredEventsPage() {
    const router = useRouter();
    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})

    if (!filteredEvents || filteredEvents.left === 0) {
        return <p className="center">No events found</p>
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    )
}

export default filteredEventsPage;