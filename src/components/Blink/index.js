import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class Cursor extends React.Component {
  render() {
    const {
      color,
      fontSize,
      text,
      background,
      opacity,
      textAlign,
      blinkTime,
      fontStyle,
      fontWeight,
      textTransform,
      textDecoration,
      letterSpacing
    } = this.props;
    const root = document.documentElement;
    root.style.setProperty("--blink-time", `${blinkTime}s`);
    return (
      <div style={{backgroundColor: background, opacity, textAlign}}>
        <span className="blink" style={{
          color, fontSize, fontStyle, fontWeight, textTransform, textDecoration,
          letterSpacing
        }}>
          {text}
        </span>
      </div>
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
  text: "React Blink",
  background: "transparent",
  opacity: 1,
  blinkTime: 1,
  fontStyle: "normal",
  textTransform: "none"
};

export default Cursor;