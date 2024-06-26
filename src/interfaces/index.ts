export interface DebugConfigOption {
    prop: string;
    label: string;
    value: boolean;
}


export interface DispatchOptions<T> {
    eventId: string;
    target?: EventTarget;
    detail?: T;
}

export interface RemoveOptions {
    eventId: string;
    handler: (evt: CustomEvent<any>) => void;
    target?: EventTarget;
}


export interface HandleOptions {
    eventId: string;
    target?: EventTarget;
    callback?: (evt: CustomEvent) => void;
}


export interface SpineResource {
    files: string[];
}

export interface FileEntry {
    type: string;
    data: string | ArrayBuffer | null;
    name: string;
    path: string | undefined;
}

export interface BackgroundColorData {
    color: number;
    alpha: number;
}

export interface FilesLoadedData {
    files: FileEntry[];
    canvasBackground: BackgroundColorData;
}

export interface SpineMixin {
    fromAnim: string;
    toAnim: string;
    duration: number;
}

export interface DebugOption {
    option: string;
    value: boolean;
}

export interface SpineData {
    animations: string[];
    skins: string[];
}

export interface AnimationPlayData {
    animation: string;
    loop: boolean;
}

export interface TimelineEntry {
    id: string;
    animation: string;
}