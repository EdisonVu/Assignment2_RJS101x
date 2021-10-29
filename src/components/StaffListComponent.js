import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { STAFFS } from '../shared/staffs'

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: [
                STAFFS
            ]
        }
    }

    render() {
        const staffList = this.state.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-12 col-md-5 m-1">
                    <Media tag="li">
                        <Media left middle>
                            
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {staffList}
                    </Media>
                </div>
            </div>
        ); 
    }

}

export default StaffList;