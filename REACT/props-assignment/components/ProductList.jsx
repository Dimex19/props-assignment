import ProductCard from "./ProductCard"
import Hasbro from "../src/assets/icons/hasbro.png"
import Apple from "../src/assets/icons/apple.png"
import ProfImage from "../src/assets/react.svg"
const ProductList = ()=> {
    const products = [
        {id: 1, productName: 'iPhone X', image: {Hasbro}, price: 99.99, description: 'A smartphone with a great camera, 4GB RAM, 64GB ROM'},
        {id: 2, productName: 'Apple Smart TV', image: {Apple}, price: 829.99, description: 'A smart TV with lots of channels to watch your favorite shows '},
        {id: 3, productName: 'LG OLED TV', image: {ProfImage}, price: 1009.99, description: 'A smart TV with a top notch video quality'},
        {id: 4, productName: 'Nike SB Dunk', image: {Hasbro}, price: 159.99, description: 'A stylish sneakers with great comfortability'},
        {id: 5, productName: 'Haier Themocool AC', image: {ProfImage}, price: 500.99, description: 'An energy saving AC with inverter'},
        {id: 6, productName: 'OX Fan', image: {Hasbro}, price: 159.99, description: 'Best quantity solar enabled fan with long life span'}
    ]

    return (
        <>
            {products.map((product) => (
            <>
                <ProductCard productName={product.productName} description={product.description} price={product.price} image={product.image}/>
            </>
        ))}
        </>
    )

}
export default ProductList