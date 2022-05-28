/**
 * Helper to handle DB responses and restructuring
 */

import { LoginDataResponse } from "@foodstyles/interfaces/mainInterfaces";

export const mapLoginDataResponse = (params: any): LoginDataResponse => {
  if (params) {
    return {
      id: params.id || "",
      email: params.email || "",
      name: params.name || "",
      facebookId: params.facebookId || "",
      googleId: params.googleId || "",
      appleId: params.appleId || "",
    };
  } else {
    return {
      id: "",
      email: "",
      name: "",
      facebookId: "",
      googleId: "",
      appleId: "",
    };
  }
};
