import services from "@/service";
import { UserCreateProps } from "@/lib/validators/userValidators";

export async function POST(req: Request) {
  try {
    const parsedBody = UserCreateProps.safeParse(await req.json());

    if (!parsedBody.success) {
      return new Response(JSON.stringify({ error: parsedBody.error }), {
        status: 400,
      });
    }

    const [success, user] = await services.user.create(parsedBody.data);

    if (!success) {
      return new Response(JSON.stringify({ error: user }), { status: 500 });
    }

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (error) {
    console.log("Error in POST /api/user: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
