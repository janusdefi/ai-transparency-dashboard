from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS so frontend can connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/api/stabilizer/logs")
def get_logs():
    return [
        {
            "wallet": "0xabc",
            "token": "JNS",
            "price": 1.00,
            "volatility": 0.05,
            "ratio": 150,
            "notes": "Base ratio applied due to moderate volatility"
        },
        {
            "wallet": "0xabc",
            "token": "ETH",
            "price": 1600,
            "volatility": 0.12,
            "ratio": 170,
            "notes": "High volatility, extra collateral buffer applied"
        },
        {
            "wallet": "0xabc",
            "token": "USDC",
            "price": 1.00,
            "volatility": 0.01,
            "ratio": 130,
            "notes": "Low volatility — reduced requirement"
        }
    ]
