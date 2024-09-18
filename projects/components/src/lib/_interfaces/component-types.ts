import { InjectionToken } from '@angular/core';

export type ComponentSize = 'small' | 'medium' | 'large';
export const DEFAULT_COMPONENT_SIZE: ComponentSize = 'medium';
export const NuiComponentSize = new InjectionToken<ComponentSize>('Default size of components');

export type ComponentDisplay = 'auto' | 'block';
export const DEFAULT_COMPONENT_DISPLAY: ComponentDisplay = 'auto';

export type ComponentColor = 'default' | 'azure' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'lime';
export const DEFAULT_COMPONENT_COLOR: ComponentColor = 'default';
export const NuiComponentColor = new InjectionToken<ComponentColor>('Default color of components');
