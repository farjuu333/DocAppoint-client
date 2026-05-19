import React from 'react';
import MyBookingsPage from './my-bookings/page';
import MyProfilePage from './my-profile/page';

const DashboardPage = () => {
    return (
        <div>
             DashboardPage 

             <MyBookingsPage>booked</MyBookingsPage>
             <MyProfilePage>profi</MyProfilePage>
        </div>
    );
};

export default DashboardPage;