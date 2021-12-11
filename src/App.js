import {Route, Routes} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorite";
import Layout from './components/layouts/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage/>}/>
        <Route path="/new-meetup" element={<NewMeetupPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
