import React from 'react';

class MyComponents extends React.Component {


    state = {
        MyName:"helo",
        firt:"nodedjs"
    }
    /**
     * 
     * @returns 
     */

    handleOnchangeName = (event)=>{

        this.setState({
            MyName: event.target.value,
            
        })
    }
    handleOutchangeName =(event)=>{
        this.setState({
            firt: event.target.value
        })
    }
    render(){

        
        return(
            <>
                <div className='firt'>
                    input firt Name:
                    <input value={this.state.MyName} type='text'
                    onChange={(event)=>this.handleOnchangeName(event)}
                    /> <br></br>
                    
                </div>
                <div className='second'>
                input last Name:
                    <input value={this.state.firt} type='text'
                    onChange={(event)=>this.handleOutchangeName(event)}
                
                    >

                    </input>
               
                </div>
                <div>
                firt Name: {this.state['MyName']}
                <br></br>
                Last Name: {this.state.firt}
                </div>
            </>
            
        )

    }
}

export default MyComponents;