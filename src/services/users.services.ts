import ApiError from "../exceptions";
import config from "config";

import generatePassword from "password-generator";
import Users, { UserRole } from "../models/users.model";
import { CreateUserType } from "../schemas/users.schema";
import mailer from "../mailer";

class UsersService {
  async identify(identity: string) {
    const userWithEmail = await Users.findOne({ email: identity });
    if (userWithEmail) {
      return userWithEmail;
    }
    const userWithLogin = await Users.findOne({ login: identity });
    if (userWithLogin) {
      return userWithLogin;
    }
    throw ApiError.BadRequest("Пользователь не найден");
  }

  async createUser({
    email,
    login,
    role,
    fullname,
  }: CreateUserType) {
    const sameEmailUser = await Users.findOne({ email });
    if (sameEmailUser) {
      throw ApiError.BadRequest("Пользователь с такой почтой уже существует.");
    }
    const sameLoginUser = await Users.findOne({ login });
    if (sameLoginUser) {
      throw ApiError.BadRequest("Пользователь с таким именем уже существует.");
    }
    const password = generatePassword(8, false, /[\w\W\d\p]/);
    const mailStatus = await mailer.createUserMail(email, { login, password });
    if (!mailStatus) {
      throw ApiError.BadRequest(
        "Некорректный email, не удалось отправить письмо"
      );
    }
    const user = await Users.create({
      email,
      login,
      fullname,
      role,
      password,
    });
    return { ...user };
  }

  async createAdmin() {
    const Admin = await Users.findOne({ role: UserRole.ADMIN });
    if (Admin) {
      return;
    }
    console.log("Создаем администратора");
    return this.createUser({
      email: "dev@flavita.ru",
      fullname: "dev Administrator",
      login: "dev",
      role: UserRole.ADMIN,
    });
  }

  async getUsers() {
    return await Users.find()
      .select("-password -__v")
      .lean();
  }

  async getUser(userId: string) {
    const user = await Users.findById(userId).select("-password -__v");
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    return user;
  }

  async updateUserPassword(userId: string, password: string) {
    const user = await Users.findById(userId);
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    user.password = password;
    await user.save();
    return;
  }
  async replaceUserPassword(
    userId: string,
    password: string,
    newPassword: string
  ) {
    const user = await Users.findById(userId);
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    const isEqual = await user.comparePassword(password);
    if (!isEqual) {
      throw ApiError.Forbiden("Неверный пароль");
    }
    user.password = newPassword;
    await user.save();
    return true;
  }
  async replaceUserEmail(userId: string, email: string, password: string) {
    const user = await Users.findById(userId);
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    const isEqual = await user.comparePassword(password);
    if (!isEqual) {
      throw ApiError.Forbiden("Неверный пароль");
    }
    user.email = email;
    await user.save();
    return true;
  }

  async updateUserRole(userId: string, role: UserRole) {
    const user = await Users.findByIdAndUpdate(userId, { role });
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    return;
  }
  async deleteUser(userId: string) {
    const user = await Users.findByIdAndDelete(userId);
    if (!user) {
      throw ApiError.NotFound("Пользователь не найден");
    }
    // await Contacts.deleteOne({ userId }); что будет с заказом без контактов?
    return true;
  }
}

export default new UsersService();
