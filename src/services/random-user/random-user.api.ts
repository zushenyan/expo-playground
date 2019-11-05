export type User = {
  name?: {
    first: string;
    last: string;
  };
  picture?: {
    thumbnail: string;
  };
};

export type Users = User[];

export const getUsers = async (): Promise<Users> => {
  try {
    const rawData = await fetch("https://randomuser.me/api/?page=1&results=10");
    const { results } = await rawData.json();
    return results;
  } catch (e) {
    return e;
  }
};
