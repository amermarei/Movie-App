import React, { Fragment } from "react";

export default function Profile({ userData }) {
  if (userData !== null) {
    var { first_name, last_name, age, email } = userData;
  }
  return (
    <Fragment>
      {userData ? (
        <Fragment>
          <div>name : {first_name}{last_name}</div>
          <div>age : {age}</div>
          <div>Email : {email}</div>
        </Fragment>
      ) : ""}

    </Fragment>
  );
}
