
import { useLoaderData } from "react-router-dom";
import AllTouristSpotsCard from "../Components/AllTouristSpotsCard";
import useTitle from "../Components/useTitle";

const AllTouristSpot = () => {
    useTitle('AllTouristSpot');

    const loadedData = useLoaderData();
    // Initialized isLoading state to true

    // useEffect to update isLoading state when data is loaded
  

    return (
        <div>
           <h1 className="text-4xl font-serif text-center my-8 font-semibold">Embark on an Epic Journey <br /> Discover All Tourist Destinations</h1>
                <div className="grid grid-cols-3 gap-20 mb-8 mt-8">
                    {loadedData.map(data => <AllTouristSpotsCard data={data} key={data._id}></AllTouristSpotsCard>)}
                </div>
        </div>
    );
};

export default AllTouristSpot;
