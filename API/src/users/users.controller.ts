import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post("login")
  async login(@Body() loginData: { email: string; password: string }) {
    const user = await this.usersService.findByEmail(loginData.email);
    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Check if passwords match (without encryption)
    if (user.password !== loginData.password) {
      return { success: false, message: "Incorrect password" };
    }

    // If everything is correct, return user details (excluding sensitive data)
    const { password, ...userDetails } = user;
    return { success: true, user: userDetails };
  }
}
