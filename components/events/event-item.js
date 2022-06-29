import Link from "next/link";
import classes from "./event-item.module.css"
import Button from "../ui/button";

function EventItem(props) {
    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formatedAddress = location.replace(' , ', ' \n ')
    const exploreLink = `/events/${id}`;

    console.log(image);

    return <li className={classes.item}>
        <img src={'/' + image} alt={title}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address>{formatedAddress}</address>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>Explore event</Button>
                </div>
            </div>
        </div>
    </li>
}

export default EventItem;