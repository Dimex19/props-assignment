import ProductCard from "../components/ProductCard"
import ProfileCard from "../components/ProfileCard"
import "./App.css"
import ProfImage from "../src/assets/react.svg"
import Apple from "./assets/icons/apple.png"
import Hasbro from "./assets/icons/hasbro.png"
import ProductList from "../components/ProductList"
const App = ()=> {
  return (
    <>
      <h1>Hello World!</h1>
      <ProfileCard location="Ibadan" age="23" name="Balogun" image={ProfImage} theme="dark"/>
      <ProfileCard location="Ikeja" age="22" name="Ngozi" image={Apple}/>
      <ProfileCard location="Lokoja" age="27" name="Abdullahi" image={Hasbro} theme='dark'/>

      <div className="mainProCon">
        <ProductCard image={Hasbro} productName="Hasbro" price="$54" description="the best hair conditioner"/>
        <ProductCard image={ProfImage} productName="React" price="$54" description="the best frontend library"/>
        <ProductCard image={Apple} productName="Apple" price="$54" description="the best gadget manufacturer"/>
        <ProductCard image={Hasbro} productName="Hasbro" price="$54" description="the best hair conditioner"/>
        <ProductCard image={ProfImage} productName="React" price="$54" description="the best frontend library"/>
        <ProductCard image={Apple} productName="Apple" price="$54" description="the best gadget manufacturer"/>
      </div>
      <ProductList />
    </>
  )
}
export default App