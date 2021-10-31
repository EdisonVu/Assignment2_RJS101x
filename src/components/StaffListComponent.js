import React, { Component } from 'react';
import { Card, /*CardImg, CardText,*/ CardTitle } from 'reactstrap';
// import { STAFFS } from '../shared/staffs'

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    renderStaff(staff) {
        if (staff != null)
            return(
                <Card>
                    <CardTitle>
                        {staff.name}
                    </CardTitle>
                </Card>
            );
        else
            return(
                <div></div>
            )
    }

    render() {
        const list = this.props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-md-4 col-sm-6 col-xs-12">
                    <Card onClick={() => this.onStaffSelect(staff)}>
                        <CardTitle>{staff.name}</CardTitle>
                    </Card>
                </div>
                
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
                <h5 className="">Bấm vào tên nhân viên để xem thông tin.</h5>

            </div>
        )
        
    }

}

export default StaffList;