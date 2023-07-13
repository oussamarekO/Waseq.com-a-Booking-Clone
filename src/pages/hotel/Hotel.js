import HotelCompo from "../../components/hotel/HotelCompo";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Headers from "../../components/header/Headers";

const Hotel = () => {
    return ( 
        <>
            <Navbar/>
            <Headers type="list"/>
            <HotelCompo/>
            <MailList/>
            <Footer/>
        </>
     );
}
 
export default Hotel;