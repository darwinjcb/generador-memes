import { ApiProperty } from "@nestjs/swagger";

export class CreateCrudmemeDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    imageUrl: string;
    //@ApiProperty({ default: false })
    @ApiProperty()
    isTrending: boolean;
    @ApiProperty()
    creatorName: string;
    @ApiProperty()
    likes: number;
}
