import React from 'react';
import { useParams } from 'react-router-dom';

import userData from '../Data';
import ReportList from './ReportList';

const AddUser = (props : any) => {

    const params : any = useParams();
    const data = userData[params.userId-1];
    console.log(data);

    return (
        <div>
            <h1>User Detail</h1>
            <div className="user-detail">
                <table className="user-info-table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>:</td>
                            <td>{data.age}</td>
                        </tr>
                        <tr>
                            <td>Primary Email</td>
                            <td>:</td>
                            <td>{data.email1}</td>
                        </tr>
                        <tr>
                            <td>Guardian Email</td>
                            <td>:</td>
                            <td>{data.email2}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>{data.address}</td>
                        </tr>
                        <tr>
                            <td>Remarks</td>
                            <td>:</td>
                            <td>{data.remarks}</td>
                        </tr>
                    </tbody>
                </table>

                <ReportList />
            </div>
        </div>
    )
}

export default AddUser;