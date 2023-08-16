const Tweet = require("../model/tweet");

class TweetReposirtory {
  async create(data) {
    try {
      const res = await Tweet.create(data);
      return res;
    } catch (error) {
      throw error;
    }
  }
  async upadte(id, data) {
    try {
      const res = await Tweet.findByIdAndUpdate(id, data, { new: true });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async get() {
    try {
      const res = await Tweet.find();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const res = await Tweet.findById(id);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      await Tweet.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TweetReposirtory;
