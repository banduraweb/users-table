import React, {useState, useEffect} from "react";
import {Table, Button} from "react-bootstrap";
import {USERS_TYPES_DATA} from "../../constants/users-data";
import ModalWindow from "../ModalWindow/ModalWindow";

const INIT_DATA_USER_FOR_DELETE = {
    selected: false,
    id: null,
    firstName: null,
    lastName: null
};

const TableContent = ({userDataBase, deleteUser, queryParam}) => {


    const [InfoForDeleteUser, setInfoForDeleteUser] = useState(INIT_DATA_USER_FOR_DELETE);
    const [renderData, setRenderData] = useState({
        isClicked: false,
        users: []
    });
    const {ALL_USERS} = userDataBase;

    useEffect(()=>{
        setRenderData({
            ...renderData,
            users: ALL_USERS
        })
    },[ALL_USERS]);

    const {users, isClicked} = renderData;

    const handleSort = (filterType) => {

        switch (!isNaN(+ALL_USERS[0][filterType])) {
            case true:
                isClicked ?
                setRenderData({
                    isClicked: !isClicked,
                    users: [...ALL_USERS].sort((a, b) => +a[filterType] - (+b[filterType]))
                    }) :  setRenderData({
                        isClicked: !isClicked,
                        users: [...ALL_USERS].sort((a, b) => +b[filterType] - (+a[filterType]))
                    });
                break;
            case false:
                isClicked ?
                    setRenderData({
                        isClicked: !isClicked,
                        users: [...ALL_USERS].sort((a, b) => b[filterType].localeCompare(a[filterType]))
                    }) :  setRenderData({
                        isClicked: !isClicked,
                        users: [...ALL_USERS].sort((a, b) => a[filterType].localeCompare(b[filterType]))
                    });
                break;

            default:
                setRenderData({
                    ...renderData,
                    users: ALL_USERS
                })
        }
    };
    const getUserInfoBeforeDelete =(id,name,surname)=> {
        setInfoForDeleteUser({
            ...InfoForDeleteUser,
            selected: true,
            id: id,
            firstName: name,
            lastName: surname
        });
    };

    const getConfirmDeleteUser=(oncancel, ondelete, id)=>{

        if (oncancel) {
            setInfoForDeleteUser(INIT_DATA_USER_FOR_DELETE)
        } else if (ondelete) {
            deleteUser(id);
            setInfoForDeleteUser(INIT_DATA_USER_FOR_DELETE)
        }

    };

    const visibleUsers = queryParam === ''
        ? users
        : users.filter(({ FIRST_NAME, LAST_NAME }) => (FIRST_NAME + LAST_NAME)
            .toLowerCase()
            .includes(queryParam.toLowerCase()));

    const {selected} = InfoForDeleteUser;
    return (
        <>
        <Table striped bordered hover variant="dark" responsive="sm" id="table" className="table-custom table-responsive">
            <thead>
            <tr>
                <th>#</th>
                {Object.keys(USERS_TYPES_DATA).map(elem => {
                    return (
                        <th key={elem}>
                            {elem.replace(/_/g,' ')}&#8195;
                            <Button className="btn_search"
                                    onClick={() => handleSort(elem)}
                                    variant="outline-info">
                                Sort <i className="fas fa-sort"></i>

                            </Button>
                        </th>
                    )

                })}

            </tr>
            </thead>
            <tbody>
            {
                visibleUsers.map(
                ({_id, FIRST_NAME, LAST_NAME, PHONE, GENDER, AGE}, idx) => (

                    <tr key={_id}>
                        <td>{++idx}</td>
                        <td>{FIRST_NAME}</td>
                        <td>{LAST_NAME}</td>
                        <td>{PHONE}</td>
                        <td>{GENDER}</td>
                        <td>{AGE}</td>
                        <td>{_id}
                        <Button onClick={()=>getUserInfoBeforeDelete(_id,FIRST_NAME,LAST_NAME)}
                            variant="info">delete user
                        </Button>
                        </td>

                    </tr>


                )
            )}
            </tbody>
        </Table>
            {selected && <ModalWindow
                userData={InfoForDeleteUser}
                getConfirmDeleteUser={getConfirmDeleteUser}

            />}

            </>
    );
};

export default TableContent;
