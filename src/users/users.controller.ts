import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // GET /users
    findAll() {
        return [];
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post() // POST /users
    create(@Body() user: { name: string; email: string }) {
        return user;
    }

    @Patch(':id') // PATCH /users/:id
    update(
        @Param('id') id: string,
        @Body() userUpdate: { name?: string; email?: string; role?: string }
    ) {
        return { id, ...userUpdate };
    }
}
