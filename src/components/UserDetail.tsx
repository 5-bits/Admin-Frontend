import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {useQuery} from 'react-query';
import userData from '../Data';
import ReportList from './ReportList';
import backendUser from '../BackendData'
const AddUser = (props : any) => {

    const params : any = useParams();
    const [data, setData] = useState<any[]>([]);
    //const [load, setLoad] = useState(true);
    
    useEffect(()=>{
        backendUser().then(json => setData(json))
        .catch(err => console.error(err))
    }, []);
    console.log(data[0]);

    return (
        <div>
            <h1>User Detail</h1>
            <div className="user-detail">
                <table className="user-info-table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>{data[0].name}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>:</td>
                            <td>{data[0].age}</td>
                        </tr>
                        <tr>
                            <td>Primary Email</td>
                            <td>:</td>
                            <td>{data[0].email1}</td>
                        </tr>
                        <tr>
                            <td>Guardian Email</td>
                            <td>:</td>
                            <td>{data[0].email2}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>{data[0].address}</td>
                        </tr>
                        <tr>
                            <td>Remarks</td>
                            <td>:</td>
                            <td>{data[0].remarks}</td>
                        </tr>
                    </tbody>
                </table>

                <ReportList />
            </div>
        </div>
    )
}

export default AddUser;