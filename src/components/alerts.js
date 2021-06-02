import React from "react";

let AppAlert = (props) => {
    const { texts } = props;
    return (

        <div className="alert alert-danger" role="alert" style={{ position: 'absolute', bottom: 150, left: '40%' }}>
            {texts}
        </div>

    );
};
export default AppAlert;