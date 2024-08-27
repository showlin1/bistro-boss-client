

const MenuCard = ({item}) => {
    const { name, image,price, recipe } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl h-[500px]">
                <figure >
                    <img
                        src={image}
                        alt="Shoes"
                        />
                </figure>
                <p className="absolute right-2 mt-4 mr-4 px-4 bg-slate-900 text-white">${price}</p>
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