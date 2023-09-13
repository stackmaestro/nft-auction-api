import { IsDate, IsNotEmpty, IsNumber, IsString, IsEthereumAddress } from "class-validator";
import { STATUS } from "../../src/constants/constants";

export class AuctionDto {

  @IsEthereumAddress()
  @IsNotEmpty()
  public seller: string;

  @IsString()
  @IsNotEmpty()
  tokenId: string;

  @IsNumber()
  @IsNotEmpty()
  displayPrice: number;

  @IsNumber()
  @IsNotEmpty()
  actualPrice: number;

  @IsString()
  status: STATUS.STATUS_OPEN;

  @IsString()
  @IsNotEmpty()
  startAt: string;

  @IsString()
  @IsNotEmpty()
  endAt: string
}