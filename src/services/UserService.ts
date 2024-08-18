// src/services/UserService.ts
import axios from 'axios';
import { config } from '@/config';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    role: string;
    createDate: Date;
    passwordUpdateDate: Date;
    profile_picture: string;
}

class UserService
{
    public getUsers()
    {
        return axios.get(`${config.USER_API_BASE_URL}/users`);
    }

    public createUser(user: User)
    {
        return axios.post(`${config.USER_API_BASE_URL}/addUser`, user);
    }

    public getUserById(userId: number)
    {
        return axios.get(`${config.USER_API_BASE_URL}/user/id/${userId}`);
    }

    public updateUser(user: User)
    {
        return axios.put(`${config.USER_API_BASE_URL}/update`, user);
    }

    public deleteUser(userId: number)
    {
        return axios.delete(`${config.USER_API_BASE_URL}/delete/${userId}`);
    }

    public getUserDetails(userId: number)
    {
        return axios.get(`${config.USER_API_BASE_URL}/user/details/${userId}`);
    }

    public getUserName(userId: number)
    {
        return axios.get(`${config.USER_API_BASE_URL}/user/name/${userId}`);
    }

    public getUserRole(userId: number)
    {
        return axios.get(`${config.USER_API_BASE_URL}/user/role/${userId}`);
    }

    public getUserProfilePicture(userId: number)
    {
        return axios.get(`${config.USER_API_BASE_URL}/user/profile-picture/${userId}`);
    }

    public setUsername(userId: number, newUsername: string)
    {
        return axios.put(`${config.USER_API_BASE_URL}/user/change-username/${userId}`,
        {
            userId,
            newUsername
        });
    }

    public setPassword(userId: number, newPassword: string)
    {
        return axios.put(`${config.USER_API_BASE_URL}/user/change-password/${userId}`,
          {
              userId,
              newPassword
          });
    }

    public login(username: string, password: string)
    {
        return axios.post(`${config.USER_API_BASE_URL}/user/login`,
          {
              username,
              password
          });
    }

    public setProfilePicture(userId: number, profilePicture: File)
    {
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);

        return axios.put(`${config.USER_API_BASE_URL}/user/change-profile-picture`, formData,
          {
              headers: {
                  'Content-Type': 'multipart/form-data'
              },
              params: {
                  userId
              }
          });
    }
}

export default new UserService();