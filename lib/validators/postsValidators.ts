import * as z from "zod";

export const PostCreateProps = z.object({
  user: z.object({
    connect: z.object({
      id: z.string().cuid(),
    }),
  }),
  image: z.string().optional(),
  text: z.string(),
  comments: z
    .object({
      create: z.object({
        content: z.string(),
        userId: z.string(),
      }),
    })
    .optional(),
  likes: z
    .object({
      create: z.object({
        userId: z.string(),
      }),
    })
    .optional(),
});

export type PostCreateProps = z.infer<typeof PostCreateProps>;

export const PostUpdateProps = z.object({
  image: z.string().optional(),
  comments: z
    .object({
      create: z.object({
        content: z.string(),
        userId: z.string(),
      }),
      update: z.object({
        where: z.object({
          id: z.string().cuid(),
        }),
        data: z.object({
          content: z.string(),
        }),
      }),
      deleteMany: z.object({ id: z.string().cuid() }),
    })
    .partial()
    .refine(
      (data) => data.create || data.update,
      "Either Create a new Comment or Update the Existing One"
    )
    .optional(), // Or .optional(), depending on your requirement

  likes: z
    .object({
      create: z.object({
        userId: z.string(),
      }),
    })
    .optional(),
});
