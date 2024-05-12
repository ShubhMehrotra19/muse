import * as z from "zod";

export const UserContext = z.object({
  params: z.object({
    id: z.string().cuid(),
  }),
});

export type UserContext = z.infer<typeof UserContext>;
