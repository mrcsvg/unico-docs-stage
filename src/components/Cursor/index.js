import React from "react";
import PropTypes from "prop-types";
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import "./styles.css";

class Cursor extends React.Component {
  render() {
    const {
      color,
      fontSize,
      blinkTime,
      fontStyle,
      fontWeight      
    } = this.props;

    

    if (ExecutionEnvironment.canUseDOM) {
      const root = document.documentElement;
      root.style.setProperty("--blink-time", `${blinkTime}s`);
    }

    return (

        
          <span className="blink" style={{color, fontSize, fontStyle, fontWeight}}> | </span>
        
    );
  }
}

Cursor.propTypes = {
  /** hex color */
  color: PropTypes.string,
  blinkTime: PropTypes.number,
  fontStyle: "normal" | "italic" | "oblique",
  fontWeight: PropTypes.number | "normal" | "bold" | "lighter",
  textTransform: PropTypes.string
};

Cursor.defaultProps = {
  color: "#7f58af",
  fontSize: 55,
  blinkTime: 1,
  fontStyle: "normal",
  textTransform: "none"
};

export default Cursor;