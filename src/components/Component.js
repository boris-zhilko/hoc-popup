import React from "react";
import withPopup from "./withPopup";

const SOME_TEXT = "Lorem ipsum";

const Component = (props) => {
    return <div><button onClick={props.onOpenPopup}>Open Popup</button></div>;
};

export const ComponentWithPopup = withPopup(Component, SOME_TEXT);
