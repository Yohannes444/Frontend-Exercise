import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
  
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  confirmPassword: string;

  @Prop()
  address: string;

  @Prop()
  isBuyer: boolean;

  @Prop()
  profilePic: string; // Optional field
}

export const UserSchema = SchemaFactory.createForClass(User);
