import {z} from 'zod';

export const forgotUserSchema = z
  .object({
    email: z.string().email().endsWith('@ncit.edu.np'),
    password: z.string().min(6),
    passwordConfirmation: z.string().min(6),
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ['passwordConfirmation'],
  });

export type ForgotInput = z.infer<typeof forgotUserSchema>;
