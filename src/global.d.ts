declare type Guid = string;

declare module '*.scss' {
    const content: {[className: string]: string};
    // noinspection JSUnusedGlobalSymbols
    export default content;
}
declare module "*.png" {
    const value: any;
    // noinspection JSUnusedGlobalSymbols
    export default value;
}

declare module "*.jpg" {
    const value: any;
    // noinspection JSUnusedGlobalSymbols
    export default value;
}
declare module "*.svg" {
    const value: any;
    // noinspection JSUnusedGlobalSymbols
    export default value;
}
