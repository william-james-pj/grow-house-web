export const confirmPasswordValidator = (
  password: string,
  confirmPassword: string,
) => {
  return password === confirmPassword;
};
