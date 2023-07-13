import Headers from "../../components/header/Headers";
import MyList from "../../components/myList/MyList";
import Navbar from "../../components/navbar/Navbar";

const List = () => {
    return (  
        <>
            <Navbar/>
            <Headers type="list"/>
            <MyList/>
        </>
    );
}
 
export default List;