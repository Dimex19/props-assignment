const ProductCard = (props)=> {
    return (
        <>
            <div className="productContainer">
                <img src={props.image} alt="" style={{width: "100px"}} />
                <h2>{props.productName}</h2>
                <p>{props.description}</p>
                <p>{props.price}</p>
            </div>
        </>
    )

}
export default ProductCard