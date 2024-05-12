import services from "@/service";
import { PostCreateProps } from "@/lib/validators/postsValidators";

export async function POST(req: Request) {
  try {
    const parsedBody = PostCreateProps.safeParse(await req.json());

    if (!parsedBody.success) {
      return new Response(JSON.stringify({ error: parsedBody.error }), {
        status: 400,
      });
    }

    const [success, post] = await services.posts.create(parsedBody.data);

    if (!success) {
      return new Response(JSON.stringify({ error: post }), { status: 500 });
    }

    return new Response(JSON.stringify({ user: post }), { status: 201 });
  } catch (error) {
    console.log("Error in POST /api/user: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
