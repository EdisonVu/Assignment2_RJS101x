import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat'


    function RenderStaff({staff}) {
        if (staff !== null)
            return (
            
                <Card className="col-md-3 col-sm-4 col-12">
                    <CardImg width="100%" src={staff.image} alt={staff.name} />
                </Card>
            
            );
        else
            return (
                <div></div>
            );
    }

    function RenderProfile({profile}) {
        if (profile !== null)
            return (
                <Card className="col-md-9 col-sm-8 col-12">
                    {profile.map((staffs) => {
                        return (
                            <CardBody key={staffs.id}>
                                <CardTitle>Họ và tên: {staffs.name}</CardTitle>
                                <CardText>Ngày sinh: {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                                <CardText>Ngày vào công ty: {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                                <CardText>Phòng ban: {staffs.department.name}</CardText>
                                <CardText>Số ngày nghỉ còn lại: {staffs.annualLeave}</CardText>
                                <CardText>Số ngày đã làm thêm: {staffs.overTime}</CardText>
                            </CardBody>
                        )
                    })}
                </Card>
            );
        else
            return (
                <div></div>
            );
        
    }

    const StaffDetail = (props) => {
        
        if (props.staff != null)
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/nhan-vien'>Nhân Viên</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {props.staff.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Nhân Viên</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderStaff staff={props.staff} />
                        <RenderProfile profile={props.profile} />
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            )
        
    }   


export default StaffDetail;