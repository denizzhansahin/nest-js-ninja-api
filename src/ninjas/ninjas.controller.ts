import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService:NinjasService){}
    //GET/ninjas --> []
/*
    @Get()
    getNinjas1(){
        return []
    }
*/

//GET/ninjas?type=fast --> []
    @Get()
    getNinjas(@Query('weapon') weapon: 'stars'|'nunchucks'){
        //const service = new NinjasService()
        return this.ninjasService.getNinjas(weapon)
    }

    //GET /ninjas/:id --> {...}
    @Get(':id')
    getOneNinja(@Param('id', ParseIntPipe) id:number){
        try { 
            return this.ninjasService.getNinja(id)
        } catch {
            throw new NotFoundException()
        }
    }


    //POST/ninjas
    @Post()
    createNinja(@Body(new ValidationPipe()) createdNinjaDto:CreateNinjaDto){
        return this.ninjasService.createNinja(createdNinjaDto)
    }


    //PUT/ninjas/:id --> {...}
    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() updateNinjaDto:UpdateNinjaDto){
        return this.ninjasService.updateNinja(+id,updateNinjaDto)
    }


    //DELETE /ninjas/:id
    @Delete(':id')
    removeNinja(@Param('id') id:string){
        return this.ninjasService.removeNinja(+id)
    }
}



//GET/ninjas --> []
//GET /ninjas/:id --> {...}
//POST/ninjas
//PUT/ninjas/:id --> {...}
//DELETE /ninjas/:id


//GET/ninjas?type=fast --> []