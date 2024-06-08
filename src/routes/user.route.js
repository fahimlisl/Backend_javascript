import {Router} from 'expres'


const router = Router()

router.route("/register").post(registerUser)



export default router