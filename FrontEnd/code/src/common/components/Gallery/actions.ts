import { FullGestureState } from 'react-use-gesture/dist/types';

interface Spring {
	x: number;
	rot: number;
	scale: number;
	y: number;
}

type Event = Omit<FullGestureState<"drag">, "event"> & {
	event: React.PointerEvent<Element> | PointerEvent;
};

export type Rule = (i: number, props: Event) => Spring | void;

export const actions = (i: number, props: Event) =>
	rules.map((f) => f(i, props)).find((v) => v);

const rules: Rule[] = [];

/*
    Requirements:
    - Cannot pass the parents boundaries.
    - Needs to trigger when max angle reached.
    - Trigger is based on velocity and max distance.
    - after each distance the element must move another card.
    - When it is moving it must only change angles and scale.
    - Each card behind has to change scale.
    - scale is directly related to the angle.
    - List must be a subset of the large array.
    - Animations must updated based on what the new element is.
    - Distance is a key part of playing the animation.
    - Trigonometry.
*/
