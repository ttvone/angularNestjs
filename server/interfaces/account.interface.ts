export namespace Account {
    export interface ILogin {
        username: string;
        password: string;
    }

    export interface IRegister {
        username: string;
        password: string;
        confirm_password: string;
    }
}