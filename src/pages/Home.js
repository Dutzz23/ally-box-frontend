import PageLayout from "../components/PageLayout";
import {getUser} from "../connectivity/userEndpoints";

const Home = (props) => {



    const content = <h1 className={"display-1"}>Ally Box</h1>
    const handleClick = ()=>{
    }
    return (
        <>
        <PageLayout pageContent={content}/>
            <button onClick={handleClick}>Get user</button>
        </>
    )
}

export default Home;