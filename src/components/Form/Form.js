import React, {useState} from "react";
import {Form, Button, Col} from "react-bootstrap";
import {USERS_TYPES_DATA} from "../../constants/users-data";

const INIT_FORM_ERROR = {
    isValidFirstName: null,
    isValidLastName: null,
    isValidPhone: null,
    isValidGender: null,
    isValidAge: null
};

const FormRegistration = ({
                              getUsersInfo,
                              onSubmitUsersData,
                              userState,
                              getValidationReport,
                              isSubmit
                          }) => {
    const [errorValidate, setErrorValidate] = useState(INIT_FORM_ERROR);
    console.log(isSubmit);
    const {FIRST_NAME, LAST_NAME, PHONE, GENDER, AGE} = userState;

    const validatingForm = ({target}) => {
        const {value, name} = target;

        let check = "";
        switch (name) {
            case "FIRST_NAME":
                check = value.toLowerCase().replace(/[a-z]/g, "").length;
                if (check > 0 || value.length === 0) {
                    setErrorValidate({
                        ...errorValidate,
                        isValidFirstName: false
                    });
                } else {
                    setErrorValidate({
                        ...errorValidate,
                        isValidFirstName: true
                    });
                }
                break;
            case "LAST_NAME":
                check = value.toLowerCase().replace(/[a-z]/g, "").length;
                if (check > 0 || value.length === 0) {
                    setErrorValidate({
                        ...errorValidate,
                        isValidLastName: false
                    });
                } else {
                    setErrorValidate({
                        ...errorValidate,
                        isValidLastName: true
                    });
                }
                break;
            case "PHONE":
                check = value.toLowerCase().replace(/[0-9]/g, "").length;

                if (
                    check !== 0 ||
                    (check === 0 && value.length > 10) ||
                    (check === 0 && value.length < 5)
                ) {
                    setErrorValidate({
                        ...errorValidate,
                        isValidPhone: false
                    });
                } else {
                    setErrorValidate({
                        ...errorValidate,
                        isValidPhone: true
                    });
                }
                break;
            case "GENDER":
                if (value !== "0") {
                    setErrorValidate({
                        ...errorValidate,
                        isValidGender: true
                    });
                } else {
                    setErrorValidate({
                        ...errorValidate,
                        isValidGender: false
                    });
                }
                break;
            case "AGE":
                if (+value < 1 || +value > 100) {
                    setErrorValidate({
                        ...errorValidate,
                        isValidAge: false
                    });
                } else {
                    setErrorValidate({
                        ...errorValidate,
                        isValidAge: true
                    });
                }
                break;
        }
        return errorValidate;
    };

    const resetHighLighting = () => {
        if (Object.values(errorValidate).every(Boolean)) {
            setErrorValidate(INIT_FORM_ERROR);
        }
    };

    const {
        isValidFirstName,
        isValidAge,
        isValidGender,
        isValidLastName,
        isValidPhone
    } = errorValidate;

    return (
        <Form onSubmit={onSubmitUsersData} className="w-75 p-3 mx-auto form_custom" border="primary">
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>{USERS_TYPES_DATA.FIRST_NAME}</Form.Label>
                    <Form.Control
                        className={isValidFirstName === null
                            ? null
                            :
                            !isValidFirstName
                                ? "warning"
                                : "success"}
                        onBlur={validatingForm}
                        onChange={getUsersInfo}
                        name={"FIRST_NAME"}
                        value={FIRST_NAME}
                        type="text"
                        placeholder={`${USERS_TYPES_DATA.FIRST_NAME.toLowerCase()}`}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>{USERS_TYPES_DATA.LAST_NAME}</Form.Label>
                    <Form.Control
                        className={isValidLastName === null
                            ? null
                            :
                            !isValidLastName
                                ? "warning"
                                : "success"}
                        onBlur={validatingForm}
                        onChange={getUsersInfo}
                        value={LAST_NAME}
                        name={"LAST_NAME"}
                        type="text"
                        placeholder={`${USERS_TYPES_DATA.LAST_NAME.toLowerCase()}`}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form.Row>
            <Form.Row>


                <Form.Group as={Col}>
                    <Form.Label>{USERS_TYPES_DATA.GENDER}</Form.Label>
                    <Form.Control
                        className={isValidGender === null
                            ? null
                            :
                            !isValidGender
                                ? "warning"
                                : "success"}

                        value={GENDER}
                        onChange={e => {
                            getUsersInfo(e);
                            validatingForm(e);
                        }}
                        as="select"
                        name={"GENDER"}
                    >
                        <option value={0}>Choose</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>{USERS_TYPES_DATA.AGE}</Form.Label>
                    <Form.Control

                        className={isValidAge === null
                            ? null
                            :
                            !isValidAge
                                ? "warning"
                                : "success"}

                        onChange={e => {
                            getUsersInfo(e);
                            validatingForm(e);
                        }}
                        type="number"
                        name={"AGE"}
                        value={AGE}
                        placeholder={`${USERS_TYPES_DATA.AGE.toLowerCase()}`}
                        min={1}
                        max={100}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Form.Row>


            <Col sm={4} className="m-sm-auto">
                <Form.Group>
                    <Form.Label>
                        {USERS_TYPES_DATA.PHONE.replace(/[^a-zA-Z]/g, "")}
                    </Form.Label>
                    <Form.Control
                        className={isValidPhone === null
                            ? null
                            :
                            !isValidPhone
                                ? "warning"
                                : "success"}

                        onChange={getUsersInfo}
                        onBlur={validatingForm}
                        value={PHONE}
                        name={"PHONE"}
                        type="text"
                        placeholder={`${USERS_TYPES_DATA.PHONE.toLowerCase().replace(
                            /phone/,
                            ""
                        )}`}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
            </Col>
            <>
                <Button
                    onClick={() => {
                        getValidationReport(errorValidate);
                        resetHighLighting();
                    }}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
                {isSubmit === null
                    ? null
                    : !isSubmit
                    && <span className="alert alert-primary" role="alert">
                        You should fill the form before submit
                </span>}
            </>
        </Form>
    );
};

export default FormRegistration;
