import React from "react";

const withPopup = (Component, popupText) => {

    return class extends React.Component {

        constructor() {
            super();
            this.state = {
                showPopup: false
            };
        }

        togglePopup = () => {
            this.setState({
                showPopup: !this.state.showPopup
            });
        };

        render() {
            return (
                <div>
                    <Component onOpenPopup={this.togglePopup}/>
                    <Popup closePopup={this.togglePopup} text={popupText} isVisible={this.state.showPopup}/>
                </div>
            )

        }
    }
};

const Popup = (props) => {
    if (props.isVisible) {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h1>{props.text}</h1>
                    <button onClick={props.closePopup}>Close Popup</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default withPopup;
