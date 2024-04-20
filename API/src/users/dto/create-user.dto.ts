export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  address: string;
  profilePic?: string;
  isBuyer: boolean;
}
