import React, {useEffect, useState} from 'react';
import {fetchGuests, setGuests, setDecision} from '../../redux/actions/guests';
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/loader/Loader";
import Table from "../../components/table/Table";
import _ from 'lodash'
import ModalWindow from "../../components/modal/ModalWindow";

function Home() {
    const dispatch = useDispatch();
    const guests = useSelector(({guests}) => guests.guestsList);
    const isLoaded = useSelector(({guests}) => guests.isLoaded);
    const [orderBy, setOrderBy] = useState('asc'); //asc or desc
    const [sortBy, setSortBy] = useState('id'); //asc or desc
    const [showModal, setShowModal] = useState(false);
    const [selectedGuest, setSelectedGuest] = useState([]);

    useEffect(()=>{
        dispatch(fetchGuests());
    },[dispatch]);

    const sortGuest = (sortField) =>{
        const clonedGuest = guests;
        const sortTtype  = orderBy === 'asc' ? 'desc' : 'asc';
        const orderedGuest = _.orderBy(clonedGuest, sortField, sortTtype)
        setOrderBy(sortTtype);
        setSortBy(sortField);
        dispatch(setGuests(orderedGuest));
    };

    const handleClose = () => setShowModal(false);

    const handleChange = (payload) => {
        dispatch(setDecision(payload));
        setShowModal(false);
    };

    const guestSelect = row =>{
        setShowModal(true);
        setSelectedGuest(row);
    };

    return (
        <div>
            <div className="content">
                <h1>
                    Guest List
                </h1>
                {isLoaded ?
                    <Table
                        onGuestSelect={guestSelect}
                        sortBy={sortBy}
                        guests={guests}
                        onSort={sortGuest}
                    /> : <Loader/>
                }
                {
                    showModal ? <ModalWindow
                        handleChange={handleChange}
                        guest={selectedGuest}
                        show={showModal}
                        handleClose={handleClose}
                    /> : null
                }
            </div>
        </div>
    );
}

export default Home;