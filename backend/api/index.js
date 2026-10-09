const app = require('../src/app');
const connectDB = require('../src/config/db');

module.exports = async (req, res) => {
  try {
    if (process.env.MONGODB_URI=mongodb+srv://lasier:2210@cluster0.qdsyo0c.mongodb.net/mini_cards?retryWrites=true&w=majority&appName=Cluster0) {
      await connectDB();
    }
  } catch (error) {
    console.error('Erro de conexão ao MongoDB no handler da Vercel:', error);
  }
  return app(req, res);
};
