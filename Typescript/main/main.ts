import { success, failure } from "../modules/alerts";
import User from "../types/User";

const user: User = {
    name: 'Adnan Noor',
    email: 'adnan@email.com',
    age: 30
}

console.log(user);

success();
// failure();