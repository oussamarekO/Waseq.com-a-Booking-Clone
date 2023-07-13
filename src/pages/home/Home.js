import Navbar from "../../components/navbar/Navbar";
import Headers from "../../components/header/Headers"
import Featured from "../../components/featured/Featured";
import PropertiesList from "../../components/propertiesList/PropertiesList";
import HomeGuest from "../../components/homeGuest/HomeGuest";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
            <Headers/>
            <div className="homeContainer mt-10">
                <Featured/>
                <h1 className="px-6 py-4 text-xl font-bold capitalize">Browse by property type</h1>
                <PropertiesList/>
                <h1 className="px-6 py-4 text-xl font-bold capitalize">Homes guest love</h1>
                <HomeGuest/>
                <MailList/>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Home;