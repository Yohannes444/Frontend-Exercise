import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserDocument } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const user = new this.userModel(createUserDto);
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // findOne(id: string) {
  //   return this.userModel.findById(id);
  // }

  // update(id: string, updateUserDto: UpdateUserDto) {
  //   return this.userModel.findByIdAndUpdate(
  //     { _id: id },
  //     { $set: updateUserDto },
  //     { new: true }
  //   );
  // }

  // remove(id: string) {
  //   return this.userModel.deleteOne({ _id: id }).exec();
  // }
}
