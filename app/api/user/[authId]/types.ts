import * as z from "zod";

export const UserContext = z.object({
  params: z.object({
    authId: z.string(),
  }),
});

export type UserContext = z.infer<typeof UserContext>;
