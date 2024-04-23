import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("api/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register/v2')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('fetch/dummy/user-v2')
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
  @Put('profle/:id') // Endpoint to edit a user by ID
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(id, updateUserDto); // Delegate the update operation to the UserService
  }
}
