import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { STATUS } from "src/constants/constants";

export class UserDto {

  @IsString()
  @IsNotEmpty()
  public id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  subscribed: string;

  @IsArray()
  @IsNotEmpty()
  preferences: string;
}