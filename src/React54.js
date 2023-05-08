import React from "react";
import PropTypes from "prop-types";

const MyApp = props => {
    return (
        <div>
            <h1>propes 校验：</h1>
        </div>
    )
}

MyApp.propTypes = {
    a: PropTypes.number,
    fn: PropTypes.func.isRequired,
    tag: PropTypes.element,
    filter: PropTypes.shape({
        area: PropTypes.string,
        price: PropTypes.number
    })
}

export default MyApp