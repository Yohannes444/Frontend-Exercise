export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
  address: string;
  isBuyer: boolean;
  profilePic?: string;
}
