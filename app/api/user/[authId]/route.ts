import { UserContext } from "./types";
import services from "@/service";

export async function GET(req: Request, ctx: UserContext) {
  try {
    const parsedUserContext = UserContext.safeParse(ctx);

    if (!parsedUserContext.success) {
      return new Response(JSON.stringify({ error: parsedUserContext.error }), {
        status: 400,
      });
    }

    const { authId } = parsedUserContext.data.params;

    const [success, user] = await services.user.findOne({ authId });

    if (!success) {
      return new Response(JSON.stringify({ error: user }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.log("Error in GET /api/user: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
