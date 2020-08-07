import React, {Fragment} from 'react';

const About = () => {
    return(
        <Fragment>
            <h1>About this App</h1>
            <p>Main goal:</p>
            <ul>
                <li>Create a react web app that displays the event name in the top, and
                    the invited guest’s list, and allows the user to accept/decline each
                    guest in this list.
                </li>
                <li>Clicking on a user will open a modal with this information about the
                    user:
                    <ul>
                        <li>User names</li>
                        <li>User email</li>
                        <li>Invitation status</li>
                        <li>Action buttons - “Accept”, “Decline”</li>
                    </ul>
                </li>
                <li>Please use TypeScript in your project</li>
            </ul>
            <p>Version 1.0.0</p>
        </Fragment>
    )
};
export default About;
