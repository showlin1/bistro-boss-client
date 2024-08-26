

const MenuCard = ({item}) => {
    const { name, image, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl h-[500px]">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline bg-slate-100 text-yellow-600 uppercase border-0 border-b-4">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;