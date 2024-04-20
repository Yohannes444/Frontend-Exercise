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
  email: string
  
  @Prop()
  userName: string;

  @Prop()
  address: string;

  @Prop()
  profilePic: string; // Optional field

  @Prop()
  isBuyer: boolean;
 
  @Prop()
  name: string;


  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
