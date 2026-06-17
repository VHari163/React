import App from './App.jsx'
function Hello(){
    return (
    <p style={{textAlign:"left"}}></p>
);
}

function Galaxy(props){
    return(
        <h1>{props.name}</h1>
    );
}

function Star(){
    return(
        <Galaxy name="Sun"></Galaxy>
    );
}
function Animals() {
    return (
        <>
            <h1>hello welcome to the page of Animals</h1>
            <div style={{display : "flex",gap: "20px", alignItems: "center"}}>
                <p>
                    The Theory in Practice: Advocates of the theory believe this pairing works because the Black Cat provides a grounding mystery that prevents boredom, while the Golden Retriever provides the open affection that makes the reserved partner feel safe. However, contemporary psychologists warn that a healthy dynamic requires the Golden Retriever to be allowed to "rest" without overextending themselves to keep the peace <br></br>
                </p>
                <img src="https://i.pinimg.com/736x/60/97/3f/60973f869a425b13899f68de01bd61e4.jpg" style={{width : "800px", height : "250px"}} alt="dogesh" />
            </div> 
            <button style={{width:"fit-content"}} onClick={()=>{return (<App></App>);}}>
                Birds
            </button>
            <App></App> 
            <Hello></Hello>
            <Star></Star>
        </>
    );
}

export default Animals;