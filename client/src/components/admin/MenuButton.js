import React from "react";
import { Button } from "reactstrap";

const MenuButton = ({ menu }) => {

    return <Button>{menu.name}</Button>
};

export default (MenuButton);
