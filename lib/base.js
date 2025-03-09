const querystring = require("querystring");
const axios = require("axios");

const base = (key) => {
  const base_url = "https://v3.api.termii.com/api";

  const request = (path, payload = {}) => {
    const method = payload.method.toUpperCase();
    let request_url = `${base_url}${path}`;

    if (method === "GET" || method === "DELETE") payload.data = undefined;

    if (method == "GET") {
      // add key to query
      if (!payload.query) payload.query = {};
      payload.query.api_key = key;

      // add query string to url
      const query_string = querystring.stringify(payload.query);
      request_url += query_string ? `?${query_string}` : "";
    }

    // add key to body
    if (method == "POST") {
      if (!payload.data) payload.data = {};
      payload.data.api_key = key;
    }

    const config = {
      method,
      url: request_url,
      data: payload.data,
    };

    return axios(config)
      .then((response) => response.data)
      .catch((error) =>
        Promise.reject(
          error.response?.data || { statusCode: error.response?.status || 500 }
        )
      );
  };

  return request;
};

module.exports = base;
