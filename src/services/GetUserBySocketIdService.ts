import { injectable } from "tsyringe";
import { User } from "../schemas/User";

@injectable()
class GetUserBySocketIdService{
  async execute(socketId : string){
    const user = await User.findOne({
      socketId,
    })
    return user
  }
}

export { GetUserBySocketIdService }