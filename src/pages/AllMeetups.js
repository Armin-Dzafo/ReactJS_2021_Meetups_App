import {useState, useEffect} from 'react';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//     {
//         id: 'm1',
//         title: 'This is the first meetup',
//         image: 'https://image.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg',
//         address: 'Meetup Street 5, 12345 Meetup City',
//         description: "The first meetup, which was amazing!"
//     },
//     {
//         id: 'm2',
//         title: 'This is the second meetup',
//         image: 'https://image.freepik.com/free-vector/group-young-people-posing-photo_52683-18184.jpg',
//         address: 'Meetup Street 5, 12345 Meetup City',
//         description: "The second meetup, which was faaaantastic!"
//     }
// ];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-course-database-e15b1-default-rtdb.firebaseio.com/meetups.json'
        ).then(res => {
            return res.json();
        }).then(data => {
            const meetups = [];

            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            
            setIsLoading(false);
            setLoadedMeetups(meetups);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </div>
    );
}

export default AllMeetupsPage;