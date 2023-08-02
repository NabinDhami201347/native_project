import {z} from 'zod';

export const registerUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email().endsWith('@ncit.edu.np'),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type RegisterInput = z.infer<typeof registerUserSchema>;
