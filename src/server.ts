import app from "./app";

const PORT = 3000;
const HOST = "api1.local";

app.listen(PORT, () => {
  console.log(`API 1 is running on http://${HOST}:${PORT}`);
});
