const ProductCard = ({ el }) => {
  return (
    // <div className="main_product">
    //   <div className="pro_image">
    //     <div className="images_product">
    //       <img src={el.mainImg} />
    //     </div>
    //   </div>

    //   <div className="content-product">
    //     <div className="product-name">
    //       <span>{el.name}</span>
    //     </div>
    //     <div className="price-product">
    //       <span>Rp.{el.price}</span>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="card bg-white w-[200px] h-full m-2 rounded-lg shadow-2xl">
        <div className="top">
          <img
            className="w-[200px] h-[200px] object-cover rounded-md p-2"
            src={el.mainImg}
            alt="img"
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">{el.name}</div>
          <div className="category text-xs font-light my-1">
            {el.description}
          </div>

          <div className="pricing flex items-center">
            <div className="text-sm ">
              Rp.{el.price.toLocaleString("en", { useGrouping: true })}
            </div>
            {/* <div className="price ">Rp.{el.price}</div> */}
          </div>
          {/* <div className="flex items-center my-2">
           <button className="border px-3 py-1 text-xs rounded-lg mr-1 ">
             Buy Now
           </button>
           <button className="border px-3 py-1 text-xs rounded-lg ">
             Add to Cart
           </button>
         </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
