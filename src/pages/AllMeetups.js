const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is the first meetup',
        image: 'https://www.freepik.com/free-vector/group-people-illustration-set_6969087.htm',
        address: 'Meetup Street 5, 12345 Meetup City',
        description: "The first meetup, which was amazing"
    },
    {
        id: 'm2',
        title: 'This is the second meetup',
        image: 'https://www.freepik.com/free-vector/group-people-illustration-set_6969087.htm',
        address: 'Meetup Street 5, 12345 Meetup City',
        description: "The first meetup, which was amazing"
    }
];

function AllMeetupsPage() {
    return <div>
        <h1>All Meetups</h1>
        <ul>
            {DUMMY_DATA.map((meetup) => {
                return <li key={meetup.id}>{meetup.title}</li>
            })}
        </ul>
    </div>;
}

export default AllMeetupsPage;