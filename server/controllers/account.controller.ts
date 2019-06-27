import { Controller, Get, Post, Body } from "@nestjs/common";
import { Account } from "../interfaces/account.interface";

@Controller("/account")
export class AccountController {

    @Post('login')
    public Login(@Body() model: Account.ILogin) {
        return {
            type: 'Login',
            model
        };
    }

    @Post('register')
    public Register(@Body() model: Account.IRegister) {
        return {
            type: 'Register',
            model
        };
    }

}