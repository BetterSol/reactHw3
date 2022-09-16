import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Helga",
            show: true
        }
    }
    // changeColor(){
    // this.setState({color:Math.random()})}

    componentDidMount() {
        console.log("Mount")
        console.log(this.name)
    }
    componentDidUpdate() {
        console.log("Update", this.state)
    }
    componentWillUnmount() {
         console.log("Unmount")
    }
    handleClick() {
        this.setState({name:"Ann"})
        this.setState(({show: !this.state.show}))
    }
    render() {
        return (
            <>
                <h1>Hello {this.state.name}</h1>
                {this.state.show && <h1>This will disappear on class button click</h1>}
                <button onClick={this.handleClick.bind(this)}>Class</button>
                

            </>

        )
    }
}
            
            
export default ClassComponent
            