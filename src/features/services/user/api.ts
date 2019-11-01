export interface SignInArguments {
  email: string;
}

export interface UserResponse {
  email?: string;
  error?: string;
}

export const signIn = async ({
  email
}: SignInArguments): Promise<UserResponse> => {
  try {
    const payload = await new Promise(res => {
      setTimeout(() => res({ email }), 1500);
    });
    return payload;
  } catch (e) {
    return { error: "oops" };
  }
};
