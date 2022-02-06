import { ISketch } from './@types';

import * as sketchP5 from './core/sketchP5';
import { updatePosition, updateHeading } from './view/sprite';

import { radToDeg } from './core/utils';

// -- private variables ----------------------------------------------------------------------------

/** Sprite state parameters. */
const _stateObj = {
    position: {
        x: 0,
        y: 0,
    },
    heading: 90,
};

/** Proxy to the sprite state parameters. */
const _state = new Proxy(_stateObj, {
    set: (_, key, value) => {
        if (key === 'position') {
            _stateObj.position = value;
            updatePosition(value.x, value.y);
        } else if (key === 'heading') {
            _stateObj.heading = value;
            updateHeading(value);
        }
        return true;
    },
});

// -- public variables -----------------------------------------------------------------------------

/** Artboard canvas object. */
export const sketch: ISketch = sketchP5;

// -- private functions ----------------------------------------------------------------------------

/**
 * Helper function that moves the sprite forward (+ve distance) or backward (-ve distance).
 * @param distance - distance to move
 */
function _move(distance: number): void {
    const [x1, y1, x2, y2] = [
        _state.position.x,
        _state.position.y,
        _state.position.x + distance * Math.cos(radToDeg(_state.heading)),
        _state.position.y + distance * Math.sin(radToDeg(_state.heading)),
    ];

    _state.position = { x: x2, y: y2 };

    sketch.drawLine(x1, y1, x2, y2);
}

/**
 * Helper function that turns the head of the sprite right (+ve angle) or left (-ve angle).
 * @param angle - delta angle
 */
function _turn(angle: number): void {
    _state.heading += angle;
}

// -- public functions -----------------------------------------------------------------------------

/**
 * Sets up the sketch inside the DOM container.
 * @param container DOM container
 */
export function setup(container: HTMLElement): void {
    sketch.setup(container);
}

/**
 * Resets the Painter.
 * @description dummy implementation for now.
 */
export function reset(): void {
    _state.position = { x: 0, y: 0 };
    _state.heading = 90;

    sketch.clear();
}

/**
 * Triggers the execution of the project.
 * @description dummy implementation for now.
 */
export function run(): void {
    // _sketch.setBackground(127);
    // _sketch.setBackground(255, 255, 0);
    // _sketch.setThickness(4);
    // _sketch.setColor(255, 0, 0);
    // setTimeout(() => moveForward(200), 0);
    // setTimeout(() => turnRight(90), 500);
    // setTimeout(() => moveBackward(400), 1000);
    // setTimeout(() => turnleft(270), 1500);
    // setTimeout(() => moveForward(200), 2000);
}

// -- public classes -------------------------------------------------------------------------------

import { ElementStatement, TData } from '@sugarlabs/musicblocks-v4-lib';
/** @todo This shouldn't be required. */
import { TElementName } from '@sugarlabs/musicblocks-v4-lib/@types/specification';

/**
 * @class
 * Defines a `graphics` statement element that moves the sprite forward.
 */
export class ElementMoveForward extends ElementStatement {
    constructor() {
        super('move-forward' as TElementName, 'forward', { steps: ['number'] });
    }

    /**
     * Moves the sprite `steps` forward.
     */
    onVisit(params: { [key: string]: TData }): void {
        _move(params['steps'] as number);
    }
}

/**
 * @class
 * Defines a `graphics` statement element that moves the sprite backward.
 */
export class ElementMoveBackward extends ElementStatement {
    constructor() {
        super('move-backward' as TElementName, 'backward', { steps: ['number'] });
    }

    /**
     * Moves the sprite `steps` backward.
     */
    onVisit(params: { [key: string]: TData }): void {
        _move(-params['steps'] as number);
    }
}

/**
 * @class
 * Defines a `graphics` statement element that rotates the sprite to the right.
 */
export class ElementTurnRight extends ElementStatement {
    constructor() {
        super('turn-right' as TElementName, 'right', { angle: ['number'] });
    }

    /**
     * Rotates the sprite right by `angle`.
     */
    onVisit(params: { [key: string]: TData }): void {
        _turn(params['angle'] as number);
    }
}

/**
 * @class
 * Defines a `graphics` statement element that rotates the sprite to the left.
 */
export class ElementTurnLeft extends ElementStatement {
    constructor() {
        super('turn-left' as TElementName, 'left', { angle: ['number'] });
    }

    /**
     * Rotates the sprite left sby `angle`.
     */
    onVisit(params: { [key: string]: TData }): void {
        _turn(-params['angle'] as number);
    }
}

/**
 * @class
 * Defines a `graphics` statement element that updates the sprite position to (x, y).
 */
export class ElementSetXY extends ElementStatement {
    constructor() {
        super('set-xy' as TElementName, 'set-xy', { x: ['number'], y: ['number'] });
    }

    /**
     * Updates the sprite position to (`x`, `y`).
     */
    onVisit(params: { [key: string]: TData }): void {
        const [x1, y1, x2, y2] = [
            _state.position.x,
            _state.position.y,
            -params['x'] as number,
            params['y'] as number,
        ];

        _state.position = { x: x2, y: y2 };

        sketch.drawLine(x1, y1, x2, y2);
    }
}

/**
 * @class
 * Defines a `pen` statement element that sets the pen color.
 */
export class ElementSetColor extends ElementStatement {
    constructor() {
        super('set-color' as TElementName, 'set color', { value: ['number'] });
    }

    /**
     * Sets the pen color to the `value`.
     */
    onVisit(params: { [key: string]: TData }): void {
        const value = ((params['value'] as number) - 1) % 10;
        const colorMap: [number, number, number][] = [
            [255, 241, 0],
            [255, 140, 0],
            [232, 17, 35],
            [236, 0, 140],
            [104, 33, 122],
            [0, 24, 143],
            [0, 188, 242],
            [0, 178, 148],
            [0, 158, 73],
            [186, 216, 10],
        ];
        sketch.setColor(...colorMap[value]);
    }
}

/**
 * @class
 * Defines a `pen` statement element that sets the pen thickness.
 */
export class ElementSetThickness extends ElementStatement {
    constructor() {
        super('set-thickness' as TElementName, 'set-thickness', { value: ['number'] });
    }

    /**
     * Sets the pen thickness to the `value`.
     */
    onVisit(params: { [key: string]: TData }): void {
        sketch.setThickness(params['value'] as number);
    }
}
