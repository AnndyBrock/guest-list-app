import React,{useRef} from 'react';
import {Button}  from 'react-bootstrap'
import PropTypes from "prop-types";


function Table({guests, onSort, sortBy, onGuestSelect}) {

    const inputBtn = useRef(null);

    return (
        <table className='table'>
            <thead>
            <tr>
                <th onClick={onSort.bind(null, 'id')} style={{cursor: 'pointer'}}>#{sortBy === 'id' ? <small>&#1792;</small>:''}</th>
                <th onClick={onSort.bind(null, 'firstName')} style={{cursor: 'pointer'}}>First Name{sortBy === 'firstName' ? <small>&#1792;</small>:''}</th>
                <th onClick={onSort.bind(null, 'lastName')} style={{cursor: 'pointer'}}>Last Name{sortBy === 'lastName' ? <small>&#1792;</small>:''}</th>
                <th>Email</th>
                <th onClick={onSort.bind(null, 'invite_status')} style={{cursor: 'pointer'}}>Invitation status{sortBy === 'invite_status' ? <small>&#1792;</small>:''}</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {guests.map(item=>(
                <tr key={item.id + item.firstName}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.invite_status}</td>
                    <td>
                        {
                            item.invite_status === "Invited" ?  <Button onClick={onGuestSelect.bind(null, item)} ref={inputBtn}>Manage</Button> : null
                        }
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    sortBy:PropTypes.string.isRequired,
    guests:PropTypes.array.isRequired,
    onSort:PropTypes.func,
    onGuestSelect:PropTypes.func
};

Table.defaultProps = {
    guests:[],
    sortBy:'id'
};

export default Table;