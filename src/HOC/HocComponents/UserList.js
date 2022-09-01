import React from "react";
import HOC from "./../HOC";

const UserList = ({ data }) => {
  let filerUserData = data.slice(0, 5).map((user) => {
    return (
      <div className="col-6" key={user.id}>
        <ul className="list-group">
          <li className="list-group-item">{user.name}</li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      {filerUserData}
    </div>
  );
};
const UserDataList = HOC(UserList, "users");

export default UserDataList;
