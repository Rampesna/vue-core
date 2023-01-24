import type {User} from "@/stores/auth";

const ID_TOKEN_KEY = "id_token" as string;

/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

export const saveUser = (user: User): void => {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (): User | null => {
    let user = window.localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
  window.localStorage.removeItem("user");
};

export default { getToken, saveToken, destroyToken, saveUser, getUser };
