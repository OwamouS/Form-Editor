type LoadingStatus = "idle" | "loading" | "success" | "error";
type FunctionsWithRes<F> = {
  [K in keyof F as K extends string ? `${K}Status` : never]?: LoadingStatus;
};
type Model<State, Functions> = FunctionsWithRes<Functions> & State & Functions;
type EntityId = string;
type ComponentCode = "form" | "tabs" | "page" | "group" | "element";
type ComponentName = string;
type ComponentDescription = string;
type UnknownPayload = {
  [key: string]: any;
};
type DragType = ComponentCode;
