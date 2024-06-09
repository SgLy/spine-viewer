import { BackgroundColorData } from "../../interfaces";
import { HandleFunction } from "../../types";
import { handle } from "../handle";
import { IDENTIFIERS } from "../identifiers";
import { remove } from "../remove";


export const onSetCanvasBackground = (cb: HandleFunction<BackgroundColorData>) => {

    const setCanvasBackgroundListener = (evt: CustomEvent<{ canvasBackground: BackgroundColorData }>) => {
        cb(evt.detail.canvasBackground);
    };

    handle({
        eventId: IDENTIFIERS.SET_CANVAS_BACKGROUND,
        callback: setCanvasBackgroundListener
    });

    return () => {
        remove({
            eventId: IDENTIFIERS.SET_CANVAS_BACKGROUND,
            handler: setCanvasBackgroundListener
        });
    }
};