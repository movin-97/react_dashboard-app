import React from "react";
import HOC from "./HOC";

const Menu = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.slice(0, 10).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const EnhancedMenu = HOC(Menu, "posts");

export default EnhancedMenu;
