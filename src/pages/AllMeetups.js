import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is the first meetup',
        image: 'https://image.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg',
        address: 'Meetup Street 5, 12345 Meetup City',
        description: "The first meetup, which was amazing"
    },
    {
        id: 'm2',
        title: 'This is the second meetup',
        image: 'https://image.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg',
        address: 'Meetup Street 5, 12345 Meetup City',
        description: "The first meetup, which was amazing"
    }
];

function AllMeetupsPage() {
    return (
        <div>
            <h1>All Meetups</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </div>
    );
}

export default AllMeetupsPage;