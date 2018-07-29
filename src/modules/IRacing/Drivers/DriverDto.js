// @flow
export default class DriverDto {
    _id: string;
    _username: string;
    _nickname: string;
    _iRating: number;
    _license: number;
    _teamName: string;
    _carNumber: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get nickname(): string {
        return this._nickname;
    }

    set nickname(value: string) {
        this._nickname = value;
    }

    get iRating(): number {
        return this._iRating;
    }

    set iRating(value: number) {
        this._iRating = value;
    }

    get license(): number {
        return this._license;
    }

    set license(value: number) {
        this._license = value;
    }

    get teamName(): string {
        return this._teamName;
    }

    set teamName(value: string) {
        this._teamName = value;
    }

    get carNumber(): string {
        return this._carNumber;
    }

    set carNumber(value: string) {
        this._carNumber = value;
    }
}
