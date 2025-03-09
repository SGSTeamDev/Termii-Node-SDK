class Messaging {
  constructor(request) {
    this.request = request;
  }

  async senderId(query) {
    return this.request(`/sender-id`, { method: "GET", query });
  }

  async requestId(data) {
    return this.request("/sender-id/request", { method: "POST", data });
  }

  async send(data) {
    return this.request("/sms/send", { method: "POST", data });
  }

  async sendBulk(data) {
    return this.request("/sms/send/bulk", { method: "POST", data });
  }
}

module.exports = Messaging;
