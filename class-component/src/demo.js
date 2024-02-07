import React from "react";

class Demo extends React.Component{

    click = () => {
        this.setState({ name:'demo',})
        this.setState({ pass:'12',})
    }

    constructor(){
        super()
        console.log('demo');
        this.state ={
            name :'smit',
            pass:'1234'
        }
    }


    render(){
        return(
            <div>
                <h1>props: {this.props.op}</h1>
                <h1>demo</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.pass}</h1>
                <input type="button" value="click here" onClick={this.click} />
            </div>
        )
    }
}

export default Demo;