import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tempValue: ''
        }
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({tempValue: event.target.value});
        // this.props.checkConnectProps(this.state.tempValue);
    }   

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form-group" style={{paddingTop: '16px', textAlign: 'right'}}>
                            <div className="btn-group">
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên tìm kiếm..."
                                    onChange={(event) => this.isChange(event)}/>
                                <div className="btn btn-info" 
                                    onClick={(text) => this.props.checkConnectProps(this.state.tempValue)}>
                                    Search
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Search;