import type { Dispatch as DispatchReact } from 'react';

export type Action<T, P = any, M = void> = { type: T; payload?: any; meta?: M };
export type Dispatch = DispatchReact<{ type: string }>;
