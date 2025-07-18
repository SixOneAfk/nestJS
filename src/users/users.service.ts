import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';  

@Injectable()
export class UsersService {
    private users = [
        { "id": 1, "name": 'Alice', "email": 'alice@example.com', "role": 'INTERN' },
        { "id": 2, "name": 'Bob', "email": 'bob@example.com', "role": 'ENGINEER' },
        { "id": 3, "name": 'Charlie', "email": 'charlie@example.com', "role": 'ADMIN' },
    ];



    // add other methods as needed


    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;  
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        return user;
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUserDto }  // ✅ Spread the updatedUser, not user
        }
            return user;
        })

        return this.findOne(id);
    }

    delete(id : number) {
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);
        
        return removedUser;

    }



}
