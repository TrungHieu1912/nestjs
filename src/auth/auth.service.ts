import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){

    }
    signin(){
        return {
            msg:'hello i have sign up '
        }
    }
    signup(){
        return {
            msg:'hello i have sign in '
        }
    }
};