
export interface CounterState {
    info: {
        ProfileTabOpen: boolean,
        user: {
            token: string,
            email: string,
            family_name: string
            given_name: string
            id: string
            name: string
            picture: string
            verified_email: true
        }
    };
}
export type usertype = {
    token: string,
    email: string,
    family_name: string,
    given_name: string,
    id:string,
    name: string,
    picture: string,
    verified_email: true
}