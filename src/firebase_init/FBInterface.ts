/* eslint-disable class-methods-use-this */
import { DietResponsType, SettingType } from "../types/types";
import { database } from "./fb_init/initialFB";
import { createEmailForFB } from "../utils/createEmailForFB";

export type ParamNameType = "settings" | "history" | "favourite";

export type UpdatingParamType = SettingType | DietResponsType;

export interface FBInterfaceType {
  getUserParam(
    userName: string,
    paramName: ParamNameType
  ): Promise<SettingType | string>;
  updateUserParam(
    userName: string,
    paramName: ParamNameType,
    updatingParam: UpdatingParamType
  ): Promise<string>;
}

export class FBInterface implements FBInterfaceType {
  async getUserParam(userName: string, paramName: ParamNameType) {
    userName = createEmailForFB(userName);
    const dbref = database.ref(database.db);
    return database
      .get(database.child(dbref, `users/${userName}/${paramName}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        }
        return {};
      })
      .catch((error) => error);
  }

  async updateUserParam(
    userName: string,
    paramName: ParamNameType,
    updatingParam: UpdatingParamType
  ): Promise<string> {
    userName = createEmailForFB(userName);
    return database
      .set(
        database.ref(database.db, `users/${userName}/${paramName}`),
        updatingParam
      )
      .then(() => updatingParam)
      .catch((error) => error);
  }
}
