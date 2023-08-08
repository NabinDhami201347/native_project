import {registerUserSchema, RegisterInput} from './register';
import {loginUserSchema, LoginInput} from './login';
import {forgotUserSchema, ForgotInput} from './forgot';

export {registerUserSchema, loginUserSchema, forgotUserSchema};
export type {RegisterInput, LoginInput, ForgotInput};
