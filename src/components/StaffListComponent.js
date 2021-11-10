import React from "react";
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

    function RenderStaff({ staff }) {
        return(
            <Card className="App">
                <Link to={`/nhan-vien/${staff.id}`} >
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                    <CardTitle>{staff.name}</CardTitle>
                </Link>
            </Card>
        );
    }

    const StaffList = (props) => {

        const staffList = props.staffs.map((staff) => {
            return (
                <div key={staff.id} className="col-md-2 col-sm-4 col-6">
                    <RenderStaff staff={staff} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/nhan-vien'>App</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Nhân Viên
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Nhân Viên</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {staffList}
                </div>
            </div>
        );
    }
        

export default StaffList;