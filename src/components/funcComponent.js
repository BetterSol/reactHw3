import {useState, useEffect} from "react"


const FuncComponent = ({show})=> {
    const [func, setFunc] = useState( false)
    useEffect( ()=> {
        console.log("Bye", func)
    },[func])
    useEffect( ()=> {
        console.log("Hi", show)
    },[show])
        return (
            <>
                {/*<h1>Func</h1>*/}
                {/*<h1>Func</h1>*/}
                <button
                onClick={()=> setFunc((prevState) => !prevState)}
            >Func</button>
            </>
        )

    }

export default FuncComponent