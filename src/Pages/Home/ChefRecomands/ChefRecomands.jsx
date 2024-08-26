import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../MenuCard/MenuCard";


const ChefRecomands = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const ChefRecommends = data.filter(item => item.category === 'salad');
                setMenu(ChefRecommends)
            })
    }, [])
    return (
        <div className="my-20">
            <SectionTitle
            subHeading={'---Should Try---'}
            heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    menu.map(item =><MenuCard
                    key={item._id}
                    item={item}
                    ></MenuCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecomands;