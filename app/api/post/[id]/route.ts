import services from "@/service";
import { PostContext } from "./types";
import { PostUpdateProps } from "@/lib/validators/postsValidators";

export async function GET(req: Request, ctx: PostContext) {
  try {
    const parsedUserContext = PostContext.safeParse(ctx);

    if (!parsedUserContext.success) {
      return new Response(JSON.stringify({ error: parsedUserContext.error }), {
        status: 400,
      });
    }

    const { id } = parsedUserContext.data.params;

    const [success, post] = await services.posts.findOne({ id });

    if (!success) {
      return new Response(JSON.stringify({ error: post }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ user: post }), { status: 200 });
  } catch (error) {
    console.log("Error in GET /api/post/id: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function PUT(req: Request, ctx: PostContext) {
  try {
    const parsedUserContext = PostContext.safeParse(ctx);

    if (!parsedUserContext.success) {
      return new Response(JSON.stringify({ error: parsedUserContext.error }), {
        status: 400,
      });
    }

    const { id } = parsedUserContext.data.params;

    const parsedBody = PostUpdateProps.safeParse(await req.json());

    if (!parsedBody.success) {
      return new Response(JSON.stringify({ error: parsedBody.error }), {
        status: 400,
      });
    }

    const [success, post] = await services.posts.update(
      { id },
      parsedBody.data
    );

    if (!success) {
      return new Response(JSON.stringify({ error: post }), { status: 500 });
    }

    return new Response(JSON.stringify({ user: post }), { status: 200 });
  } catch (error) {
    console.log("Error in PUT /api/user: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, ctx: PostContext) {
  try {
    const parsedUserContext = PostContext.safeParse(ctx);

    if (!parsedUserContext.success) {
      return new Response(JSON.stringify({ error: parsedUserContext.error }), {
        status: 400,
      });
    }

    const { id } = parsedUserContext.data.params;

    const [success, user] = await services.user.deleteOne({ id });

    if (!success) {
      return new Response(JSON.stringify({ error: user }), { status: 500 });
    }

    return new Response(JSON.stringify({ user }), { status: 200 });
  } catch (error) {
    console.log("Error in DELETE /api/user: ", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
