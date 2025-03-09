require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const base = require("./lib/base");

const Messaging = require("./services/messaging");
const Token = require("./services/token");
const Insight = require("./services/insight");

module.exports = (key) => {
  const request = base(key);

  return {
    Messaging: new Messaging(request),
    Token: new Token(request),
    Insight: new Insight(request),
  };
};
