import { app } from "./server";

const PORT = 4000;

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}…`);
});
