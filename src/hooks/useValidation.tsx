import * as z from 'zod';

function useValidation() {
  const fieldRequired = z
    .string()
    .min(1, { message: 'This field is required.' });
  const emailFieldRequired = fieldRequired.email('This is not a valid email.');
  const passwordFieldRequired = fieldRequired
    .min(8, 'Password must be at least 8 characters long.')
    .max(50, 'Password must be less than 50 characters long.')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,50}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.',
    );

  return {
    fieldRequired,
    emailFieldRequired,
    passwordFieldRequired,
  };
}

export default useValidation;
