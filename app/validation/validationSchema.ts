import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().email({ message: "Please Enter Valid Email Address" }),
});
