import app from "./app";
import config from "./config/config";

const port = config.serverPort;
//handling errors if any happens
// start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
