import { IsEnum, MinLength } from "class-validator"

export class CreateNinjaDto {
    @MinLength(3)
    name:string

    @IsEnum(['stars', 'nunchucks'],{message:'Use weapon'})
    weapon: 'stars' | 'nunchucks'
}
