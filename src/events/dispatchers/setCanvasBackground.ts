import { BackgroundColorData } from "../../interfaces";
import { dispatch } from "../dispatch";
import { IDENTIFIERS } from "../identifiers";

export const setCanvasBackground = (canvasBackground: BackgroundColorData) => {
    dispatch({
        eventId: IDENTIFIERS.SET_CANVAS_BACKGROUND,
        detail: {
            canvasBackground,
        },
    });
};