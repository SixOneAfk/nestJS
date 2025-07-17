import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
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

    @Delete(':id') // Delete /users/:id
    delete(@Param('id') id: string) {
        return { id };
    }

}
