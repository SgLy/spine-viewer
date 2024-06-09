import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { BackgroundColorData } from "../../interfaces";
import { hexStringToNumber } from "../../utils/numberUtils";

interface SettingsStoreVersion0 {
    theme: string;
    canvasBackground: string;
}

export interface SettingsStore {
    theme: string;
    canvasBackground: BackgroundColorData;
}

export interface SettingsStoreActions {
    setTheme: (theme: string) => void;
    setCanvasBackground: (canvasBackground: BackgroundColorData) => void;
}

export const useSettingsStore = create<SettingsStore & SettingsStoreActions>()(
    devtools(
        persist((set) => ({
            theme: "dark",
            canvasBackground: {
                color: 15002352, // #e4eaf0
                alpha: 1,
            },
            setTheme: (theme) => set((_) => ({ theme })),
            setCanvasBackground: (canvasBackground) => set((_) => ({ canvasBackground })),
        }), {
            name: "settings",
            version: 1,
            migrate(persistedState, version) {
                if (version === 0) {
                    (persistedState as SettingsStore).canvasBackground = {
                        alpha: 1,
                        color: hexStringToNumber((persistedState as SettingsStoreVersion0).canvasBackground),
                    }
                }
                return persistedState as SettingsStore & SettingsStoreActions
            },
        })
    )
);