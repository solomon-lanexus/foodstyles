import LoggingService from "@foodstyles/utils/logging/LoggingService";

import { ACCESS_TOKEN, GRAPHQL_ENDPOINT } from "@foodstyles/constants/Config";

import axios from "axios";
const logError = (messageRoot: string, error: any) => {
  LoggingService.error(
    `REGISTRATION ERROR on ${messageRoot}: error: ${error.message}`
  );
};

export function GraphQLGetCards(): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      var data = JSON.stringify({
        query: `query {
         cards {
             id
             name       
         }
      }`,
        variables: {},
      });

      var config = {
        method: "post",
        url: GRAPHQL_ENDPOINT,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + ACCESS_TOKEN,
        },
        data: data,
      };

      axios(config)
        .then(function (response: { data: any }) {
          resolve(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          logError("error", error);
        });
    } catch (e) {
      logError("error", e);
      console.log("REGISTRATION ERROR:", e);
      reject(e);
    }
  });
}
