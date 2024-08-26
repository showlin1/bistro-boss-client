import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading={'Featured Item'}
                subHeading={'check it out'}
            ></SectionTitle>
            <div className="flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 26, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis aspernatur reiciendis incidunt sint magni delectus laudantium, facilis, deleniti suscipit soluta libero accusamus dolor temporibus, nulla necessitatibus quas earum sit.</p>
                    <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;