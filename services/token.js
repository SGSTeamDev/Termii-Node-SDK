class Token {
  constructor(request) {
    this.request = request;
  }

  async send(data) {
    return this.request("/sms/otp/send", { method: "POST", data });
  }

  async verify(data) {
    return this.request("/sms/otp/verify", { method: "POST", data });
  }

  async inApp(data) {
    return this.request("/sms/otp/generate", { method: "POST", data });
  }
}

module.exports = Token;
