// @flow
export default class DriverDto {
    _id: string;
    _userName: string;
    _nickName: string;
    _iRating: number;
    _license: number;
    _teamName: string;
    _clubName: string;
    _carNumber: string;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get nickName(): string {
        return this._nickName;
    }

    set nickName(value: string) {
        this._nickName = value;
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

    get clubName(): string {
        return this._clubName;
    }

    set clubName(value: string) {
        this._clubName = value;
    }

    get carNumber(): string {
        return this._carNumber;
    }

    set carNumber(value: string) {
        this._carNumber = value;
    }
}
