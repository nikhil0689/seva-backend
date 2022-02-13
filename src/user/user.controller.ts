import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDTO } from './create-user.dto';
import { UserMap } from './user.datamapper';
import { UserResponseDTO } from './user.response.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserResponseDTO> {
    const val = await this.userService.getUserById(id);
    return UserMap.toUserDTO(val);
  }

  @Post()
  async addUser(@Body() userDTO: UserDTO): Promise<UserResponseDTO | null> {
    const val = await this.userService.addUser(userDTO);
    if (val === null) {
      return null;
    }
    return UserMap.toUserDTO(val);
  }
}
