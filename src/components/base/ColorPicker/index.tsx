

import { useState } from "react";
import { SketchPicker, ColorResult, RGBColor } from "react-color";
import { BackgroundColorData } from "../../../interfaces";
import "./ColorPicker.css";

interface ColorPickerProps {
    color: BackgroundColorData;
    handleColorChange: (color: BackgroundColorData) => void;
    label?: string;
}

const rgbToNumber = (color: RGBColor) => (color.r << 16) + (color.g << 8) + color.b
const numberToRgba = (color: BackgroundColorData) => ({
    r: color.color >> 16,
    g: (color.color >> 8) & 0xFF,
    b: color.color & 0xFF,
    a: color.alpha,
})
const rgbaToString = (color: RGBColor) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a ?? 1})`

const ColorPicker: React.FC<ColorPickerProps> = ({ color, handleColorChange, label }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const handleSwatchClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const onColorChange = (color: ColorResult) => {
        handleColorChange({
            alpha: color.rgb.a ?? 1,
            color: rgbToNumber(color.rgb),
        })
    }

    return (
        <div className="color-picker">
            <div className="color-picker__swatch" onClick={handleSwatchClick}>
                <div className="color-picker__color-container">
                    <div
                        style={{ backgroundColor: rgbaToString(numberToRgba(color)) }}
                        className="color-picker__color"
                    />
                </div>
                <span className="color-picker__text">{label}</span>
            </div>
            {displayColorPicker ? (
                <div className="color-picker__popover">
                    <div className="color-picker__cover" onClick={handleClose} />
                    <SketchPicker color={numberToRgba(color)} onChange={onColorChange} />
                </div>
            ) : null}
        </div>
    );
};

export default ColorPicker;
