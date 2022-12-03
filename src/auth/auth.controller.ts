import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
//global prefix route 
export class AuthController {
    constructor(private authService: AuthService) { }
    // khi call đường dẫn mặc định sẽ chuyển thành auth/signup
    @Post('signup')
    //post decorator 
    signup(@Body() dto: AuthDto) {
        console.log('dto', {dto});
        if(!dto.email){
             console.log('loi lol lol');
            
        }
        return this.authService.signup()
    }
    // khi call đường dẫn mặc định sẽ chuyển thành auth/signin
    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}