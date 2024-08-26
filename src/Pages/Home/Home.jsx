import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BistroBoss from "./BistroBoss/BistroBoss";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecomands from "./ChefRecomands/ChefRecomands";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecomands></ChefRecomands>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;