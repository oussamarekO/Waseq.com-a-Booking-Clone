import './PropertiesList.css';
import hotels from '../../asset/hotel.jpg';
import villas from '../../asset/villas.jpg';
import ressort from '../../asset/resorts.jpg';
import appartement from '../../asset/appartement.jpg';
import cabins from '../../asset/cabins.jpg';
const PropertiesList = () => {
    return ( 
        <div className="propertiesList py-2 px-6 w-full">
            <div className="box">
                <img src={hotels} alt="property" />
                <div className="title">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>

            <div className="box">
                <img src={ressort} alt="property" />
                <div className="title">
                    <h1>Ressort</h1>
                    <h2>256 ressort</h2>
                </div>
            </div>

            <div className="box">
                <img src={villas} alt="property" />
                <div className="title">
                    <h1>Villas</h1>
                    <h2>86 villas</h2>
                </div>
            </div>

            <div className="box">
                <img src={cabins} alt="property" />
                <div className="title">
                    <h1>Cabins</h1>
                    <h2>300 cabins</h2>
                </div>
            </div>

            <div className="box">
                <img src={appartement} alt="property" />
                <div className="title">
                    <h1>Appartement</h1>
                    <h2>156 appartement</h2>
                </div>
            </div>
        </div>
     );
}
 
export default PropertiesList;