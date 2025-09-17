
export interface CounterState {
    info: {
        ProfileTabOpen: boolean,
        user: {
            token: string | null,
            email: string | null,
            family_name: string | null,
            given_name: string | null,
            id: string | null,
            name: string | null,
            picture: string | null,
            verified_email: string | null
        }
    };
}
export type usertype = {
    token: string,
    email: string,
    family_name: string,
    given_name: string,
    id: string,
    name: string,
    picture: string,
    verified_email: true
}

export interface RootState {
    Data: {
        info: {
            ProfileTabOpen: boolean;
        },
        user: {
            token: string,
            email: string,
            family_name: string,
            given_name: string,
            id: string,
            name: string,
            picture: string,
            verified_email: string
        }
    };
}