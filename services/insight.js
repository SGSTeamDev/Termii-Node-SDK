class Insight {
  constructor(request) {
    this.request = request;
  }

  async balance(query) {
    return this.request(`/get-balance`, { method: "GET", query });
  }

  async search(query) {
    return this.request(`/check/dnd`, { method: "GET", query });
  }

  async history(query) {
    return this.request(`/sms/inbox`, { method: "GET", query });
  }

  async status(query) {
    return this.request(`/insight/number/query`, { method: "GET", query });
  }
}

module.exports = Insight;
