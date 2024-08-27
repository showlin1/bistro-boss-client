import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCard from "../MenuCard/MenuCard";
import useMenu from "../../../Hooks/UseMenu";


const ChefRecomands = () => {
    const [menu] = useMenu();
    const ChefRecommends = menu.filter(item => item.category === 'salad');
    return (
        <div className="my-20">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    ChefRecommends.map(item => <MenuCard
                        key={item._id}
                        item={item}
                    ></MenuCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecomands;