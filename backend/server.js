import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Force load .env from current directory
dotenv.config({ path: path.join(__dirname, '.env') });

// Debug: Check if .env loaded
console.log("Loading .env from:", path.join(__dirname, '.env'));
console.log("API Key loaded:", !!process.env.GROQ_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Backend is running",
    apiKeySet: !!process.env.GROQ_API_KEY
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    console.log("📨 Received chat request");
    
    if (!process.env.GROQ_API_KEY) {
      throw new Error("API key missing. Please check .env file");
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: req.body.messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Groq API Error:", data);
      throw new Error(data.error?.message || 'API request failed');
    }
    
    console.log("✅ Chat response received");
    
    res.json({
      message: {
        role: "assistant",
        content: data.choices[0].message.content
      }
    });

  } catch (error) {
    console.error("❌ Error:", error.message);
    res.status(500).json({
      message: {
        role: "assistant",
        content: `⚠️ Error: ${error.message}`
      },
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
  console.log(`🔑 API Key set: ${!!process.env.GROQ_API_KEY}`);
});