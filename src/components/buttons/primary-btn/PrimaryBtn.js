
const PrimaryBtn = ({btnName}) => {
    const style ={
        backgroundColor: "rgb(233, 69, 96)",
        textDecoration: "none",
        color: "white"
    }
    
    return (
        <a href="/" className="btn"  style={style}>
            {btnName}
        </a>
    );
};

export default PrimaryBtn;