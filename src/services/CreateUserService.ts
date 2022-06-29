import { injectable } from "tsyringe";
import { User } from "../schemas/User"

interface CreateUserDTO {
  email: string;
  socketId: string;
  avatar: string;
  name: string;
}

@injectable()
class CreateUserService {
  async execute({ email, socketId, avatar, name }: CreateUserDTO){
    const userAlreadyExists = await User.findOne({
      email
    }).exec()

    if(userAlreadyExists) {
      const user = await User.findOneAndUpdate(
        {
          _id: userAlreadyExists._id  
        },
        {
          $set: { socketId, avatar, name },
        }
      )
      return user
    } else{
        const user = await User.create({
          email,
          socketId, 
          avatar, 
          name 
        })
        return user
    }
  }
}

export { CreateUserService }