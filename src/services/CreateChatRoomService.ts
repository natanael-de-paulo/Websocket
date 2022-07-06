import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

@injectable()
class CreateChatRoomService {
  async execute(idUsers : string[] | any){
    const room = await ChatRoom.create({
      idUsers,
    }) 
    return room
  }
}

export { CreateChatRoomService }