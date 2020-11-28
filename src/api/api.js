import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8ef9d661-a0a6-4199-ba72-264a84528d4d",
  },
});

export const usersAPI = {
  getUsers(pageSize = 10, page = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${page}`)
      .then((res) => res.data);
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};
