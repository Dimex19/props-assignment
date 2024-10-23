const ProfileCard = (props)=> {
const lightTheme = {
    backgroundColor: "#fff",
    color: "#000"
}
const darkTheme = {
    backgroundColor: "#333",
    color: "#fff"
}

const currentTheme = `${props.theme}` === "dark" ? darkTheme : lightTheme;
console.log(currentTheme);
    return (
        <>
            
            
            <div  className={`profileContainer ${props.theme}`} style={currentTheme}>
                <img src={props.image} alt="" style={{width: "100px"}} />
                <h2>{props.name}</h2>
                <p>{props.age}</p>
                <p>{props.location}</p>
                <hr />
            </div>
        </>
    )
}
export default ProfileCard