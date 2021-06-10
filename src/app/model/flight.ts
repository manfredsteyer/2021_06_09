

export interface Flight {
    id: number; // double   -2^54 ... +2^54
    from: string;
    to: string;
    date: string; // JSON: ISO-Strings: "2020-12-24T17:00:00+01:00"
    delayed: boolean;
}