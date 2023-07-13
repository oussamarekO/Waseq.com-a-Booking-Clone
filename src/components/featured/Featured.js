import amsterdam from '../../asset/Amesterdam.jpg';
import zurich from '../../asset/zurich.jpg';
import london from '../../asset/london.jpg'
import './featured.css';

const Featured = () => {
    return ( 
        <div className="feature w-full px-6 py-4">
            <div className="box">
                <img src={amsterdam} alt="featured" />
                <div className="title">
                    <h1>Amsterdam</h1>
                    <h2>80,000 properties</h2>
                </div>
            </div>

            <div className="box">
                <img src={zurich} alt="featured" />
                <div className="title">
                    <h1>zurich</h1>
                    <h2>112,000 properties</h2>
                </div>
            </div>

            <div className="box">
                <img src={london} alt="featured" />
                <div className="title">
                    <h1>London</h1>
                    <h2>120,000 properties</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;