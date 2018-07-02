// @flow
export default class PedalsDto {
    _throttle: number = 0;
    _break: number = 0;
    _clutch: number = 0;

    get throttle(): number {
        return this._throttle;
    }

    set throttle(value: number) {
        this._throttle = value;
    }

    get break(): number {
        return this._break;
    }

    set break(value: number) {
        this._break = value;
    }

    get clutch(): number {
        return this._clutch;
    }

    set clutch(value: number) {
        this._clutch = value;
    }
}
