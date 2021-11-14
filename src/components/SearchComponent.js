import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="form-group" style={{paddingTop: '16px', textAlign: 'right'}}>
                            <div className="btn-group">
                                <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập tên tìm kiếm..."/>
                                <div className="btn btn-info">Search</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Search;