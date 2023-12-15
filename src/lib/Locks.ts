export interface Locks {
    $type: string;
    locks: Lock[];
    versionInfo?: null;
}

export interface Lock {
    id: number;
    name: string;
    type: number;
    capabilities: number;
    components: Component[];
    state: number;
    pendingTask?: number;
    alarms: never[];
}

export interface Component {
    $type: string;
    phi?: string;
    firmware?: string;
    orderCode?: string;
    batteryStatus?: number;
    settings: Settings;
    state?: number;
    quality?: number;
    parentChipID?: string;
}

export interface Settings {
    flipFlop?: boolean;
    timeout?: number;
    isOnline?: boolean;
    chipID?: string;
    wakeUpMode?: number;
}
