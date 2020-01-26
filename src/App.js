import React, {useState, useEffect} from "react";
import Dexie from "dexie";
import {Spinner, Container} from "react-bootstrap";
import uuid from 'react-uuid'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header";
import FormRegistration from "./components/Form/Form";
import TableContent from "./components/Content/TableContent";

const USER_INIT_STATE = {
    FIRST_NAME: "",
    LAST_NAME: "",
    PHONE: "",
    GENDER: "",
    AGE: ""
};

const DATABASE_OF_USERS = {
    ALL_USERS: [],
    DB_READY_INFO: {}
};

function App() {

    useEffect(() => {
        const getUsers = async () => {
            let DB_READY = await db.on("ready", () => (db));

            // let DB_TABLE = await db.tables.find((table) => table.name);
            let allUsers = await db.userDataBase.toArray();

            setTimeout(() => {
                setUserDataBase({
                    ...userDataBase,
                    ALL_USERS: allUsers,
                    DB_READY_INFO: DB_READY,
                });
            }, 1500)


        };
        getUsers();
    }, []);

    const [userState, setUsersInfo] = useState(USER_INIT_STATE);
    const [userDataBase, setUserDataBase] = useState(DATABASE_OF_USERS);
    const [isEmptyDataBase, setStatusDataBase] = useState(null);
    const [isSubmit, setStatusSubmit] = useState(null);

    const db = new Dexie("ReactDexie");

    db.version(1).stores({
        userDataBase: "_id, firstName, lastName, phone, gender, age"
    });

    db.on('ready', function () {
        return db.userDataBase.count(function (count) {
            if (count > 0) {
                setTimeout(()=>{
                setStatusDataBase(false);
                console.log("Already populated");
                },1500);
            } else {
                setTimeout(()=>{
                    setStatusDataBase(true);
                    console.log("Database is empty");
                },1500);

            }
        })
    });

    db.open().catch(err => {

        console.log(err.stack || err);
    });

    let report = {};
    const getValidationReport = (validationReport) => {
        report = validationReport
    };


    const onSubmitUsersData = e => {
        e.preventDefault();
        const dataCheck = !Object.values(userState).some(elem => elem === '');
        const reportValidDataCheck = Object.values(report).every(Boolean);
        if (dataCheck && reportValidDataCheck) {

            const {FIRST_NAME, LAST_NAME, PHONE, GENDER, AGE} = userState;

            let user = {
                _id: uuid(),
                FIRST_NAME: FIRST_NAME,
                LAST_NAME: LAST_NAME,
                PHONE: PHONE,
                GENDER: GENDER,
                AGE: AGE
            };
            db.userDataBase.add(user).then(async () => {
                let allUsers = await db.userDataBase.toArray();
                setUserDataBase({
                    ...userDataBase,
                    ALL_USERS: allUsers
                });
            });

            setUsersInfo(USER_INIT_STATE);
            setStatusSubmit(true)

        } else {
            setStatusSubmit(false)
        }
    };


    const getUsersInfo = e => {
        setUsersInfo({
            ...userState,
            [e.target.name]: e.target.value
        });
    };


    const deleteUser = async(id) => {
        db.userDataBase.delete(id);
        let allUsers = await db.userDataBase.toArray();
        setUserDataBase({
            ...userDataBase,
            ALL_USERS: allUsers
        });
    };

    const {ALL_USERS, DB_READY_INFO} = userDataBase;
    console.log(ALL_USERS,"ALL_USERS");
    return (
        <Container>
            <Header dbInfo={DB_READY_INFO}/>
            <FormRegistration
                getUsersInfo={getUsersInfo}
                onSubmitUsersData={onSubmitUsersData}
                userState={userState}
                getValidationReport={getValidationReport}
                isSubmit={isSubmit}

            />

            {
                (
                    <>
                        {isEmptyDataBase
                            ? (
                                <div className="d-flex justify-content-center">
                                <span>Database is empty...</span>
                                </div>
                            )
                            : ALL_USERS.length > 0
                                ? <TableContent
                                    userDataBase={userDataBase}
                                    deleteUser={deleteUser}

                                />
                                : (
                                    <div className="d-flex justify-content-center">
                                        <Spinner animation="grow" variant="primary" />
                                    </div>
                                )
                        }
                    </>
                )}


        </Container>
    );
}

export default App;
