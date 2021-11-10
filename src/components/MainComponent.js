import React, { Component } from "react";
import StaffDetail from "./StaffDetailComponent";
import StaffList from "./StaffListComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { STAFFS } from '../shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,
            // selectedStaff: null
        };
    }

    // onStaffSelect(staffId) {
    //     this.setState({ selectedStaff: staffId });
    // }

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
            <Switch>
                <Route exact path="/nhan-vien" component={() => <StaffList staffs={this.state.staffs} />} />
                <Route path="/nhan-vien/:id" component={StaffWithId} />
                <Redirect to="/nhan-vien" />
            </Switch>
            <Footer />
          </div>
        )
    }
}

export default Main;