import React, { Component } from "react";
import StaffDetail from "./StaffDetailComponent";
import StaffList from "./StaffListComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Search from "./SearchComponent";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        };
    }

    render() {
        const StaffWithId = ({match}) => {
            return (
                <StaffDetail 
                    staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id,10))[0]}
                    profile={this.state.staffs.filter((info) => info.id === parseInt(match.params.id,10))} 
                />
            );
        }

        return (
          <div>
            <Header />
            <Search />
            <Switch>
                <Route exact path="/nhan-vien" component={() => <StaffList staffs={this.state.staffs} />} />
                <Route path="/nhan-vien/:id" component={StaffWithId} />
                <Route exact path="/phong-ban" component={() => <Department departments={this.state.departments} /> } />
                <Route exact path="/bang-luong" component={() => <Salary staffs={this.state.staffs} /> } />
                <Redirect to="/nhan-vien" />
            </Switch>
            <Footer />
          </div>
        )
    }
}

export default Main;