import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application().use(oakCors());

app.addEventListener("listen", ({ port }) => {
  console.log("App listening at: " + port);
});

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello, World!"
  })
  .get("/data", (ctx) => {
    ctx.response.body = { message: "Hello, Data!" }
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen({ port: 80 })

