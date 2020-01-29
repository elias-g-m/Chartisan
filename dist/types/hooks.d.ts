import { mergeOptions } from './helpers';
/**
 * Stores the hooks.
 *
 * @export
 * @type {Hook}
 */
export declare type Hook<D> = (data: D, merge: typeof mergeOptions) => D;
/**
 * Determines the interface of a hook
 * constructor.
 *
 * @export
 * @interface isHook
 * @template D
 */
export interface isHook<D> {
    new (): Hooks<D>;
}
/**
 * Represents the hooks of the chart.
 *
 * @export
 * @class Hooks
 * @template D
 */
export declare class Hooks<D> {
    /**
     * Stores the hooks.
     *
     * @type {Hook<D>[]}
     * @memberof Hooks
     */
    hooks: Hook<D>[];
    /**
     * Appends a custom hook
     *
     * @param {Hook<D>} hook
     * @returns {this}
     * @memberof Hooks
     */
    custom(hook: Hook<D>): this;
    /**
     * Merges the given options to the chart.
     *
     * @param {D} options
     * @returns
     * @memberof Hooks
     */
    options(options: D): this;
}
