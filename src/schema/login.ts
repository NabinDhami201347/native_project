import {z} from 'zod';

export const loginUserSchema = z.object({
  email: z.string().email().endsWith('@ncit.edu.np'),
  password: z.string().min(6),
});

export type LoginInput = z.infer<typeof loginUserSchema>;
