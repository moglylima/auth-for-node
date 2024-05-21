import bodyParser from "body-parser";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";



const routes = (app) => {
    app.route('/').get((req, res) => { res.send('API is running'); });
    app.use(
        bodyParser.json(),
        authRouter,
        userRouter
    );
}

export default routes;