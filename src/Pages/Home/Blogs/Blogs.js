import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
            <h2 className='text-center mb-5 text-success'>Questions</h2>

            <div>
                <h4>1 Difference between authorization and authentication</h4>
                <p className='fs-5 my-3'>
                    Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications. <br />
                    Authentication needs usually user’s login details and Authorization while it needs user’s privilege or security levels. <br />
                    Authentication determines whether the person is user or not. And while authorization determines What permission do user have?. <br />
                    Authentication is the first step of authorization so always comes first.
                    Authorization is done after successful authentication.

                </p>
            </div>

            <div>
                <h4>
                    2 Why are you using firebase? What other options do you have to implement authentication?
                </h4>
                <p className='fs-5 mt-5'>
                    Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
                </p>

                <p className='fs-5 mb-5' >
                    Here are some of the options I have for implementing authentication. <br />
                    STYTCH <br />
                    Okta <br />
                    Ory <br />
                    Supabase <br />
                    PingIdentity <br />
                    Keycloak <br />
                    SAML <br />
                    OneLogin by OneIdentity is yet another Firebase alternative with noteworthy advanced features.
                </p>
            </div>
            <div>
                <h4>
                    3 What other services does firebase provide other than authentication?
                </h4>
                <p className='fs-5 '>
                    There are many services which Firebase provides, Most useful of them are:
                </p>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions </li>
                    <li>Hosting </li>
                    <li>Cloud Storage </li>
                    <li> Google Analytics</li>
                    <li>Cloud Messaging </li>
                    <li> Dynamic Links</li>
                    <li> Remote Config</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;