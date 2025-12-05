export type EventItem = {


    title:string;
    image:string;
    slug: string;
    location : string;
    date: string;
    time: string;

}


export const events: EventItem[]=[
    {
        image : '/images/event1.png',
        title: "Tech Conference 2025",
        slug: "tech-conference-2025",
        location: "San Francisco",
        date: "2025-08-12",
        time: "10:00 AM"
    },
    {
        image : '/images/event2.png',
        title: "Music Festival Night",
        slug: "music-festival-night",
        location: "Berlin",
        date: "2025-04-22",
        time: "07:30 PM"    
    },
    {
        image : '/images/event3.png',
        title: "Art Exhibition Opening",
        slug: "art-exhibition-opening",
        location: "Paris",
        date: "2025-05-10",
        time: "05:00 PM"
    },
    {
        image : '/images/event4.png',
       title: "Startup Pitch Day",
        slug: "startup-pitch-day",
        location: "New York",
        date: "2025-07-05",
        time: "02:00 PM"
    },
    {
        image : '/images/event5.png',
       title: "Gaming Expo",
        slug: "gaming-expo",
        location: "Tokyo",
        date: "2025-06-18",
        time: "11:00 AM"
    },
    {
        image : '/images/event6.png',
        title: "Health & Wellness Workshop",
        slug: "health-wellness-workshop",
        location: "Dubai",
        date: "2025-03-29",
        time: "09:00 AM"
    },{
        image : '/images/event-full.png',
         title: "Entrepreneur Meetup",
        slug: "entrepreneur-meetup",
        location: "London",
        date: "2025-09-14",
        time: "06:00 PM"
    },
]