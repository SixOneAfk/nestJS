import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role);
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) user: CreateUserDto) {
        return this.usersService.create(user);
    }

    @Patch(':id') // PATCH /users/:id
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body(ValidationPipe) UpdateUserDto: UpdateUserDto,
    ) {
        return this.usersService.update(id, UpdateUserDto);
    }

    @Delete(':id') // Delete /users/:id
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }

}
