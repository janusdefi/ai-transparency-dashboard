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
            "token": "HBAR",
            "price": 0.1658,
            "volatility": 0.10,
            "ratio": 150,
            "notes": "High volatility, extra collateral buffer applied"
        },
        {
            "wallet": "0xabc",
            "token": "USDC",
            "price": 1.00,
            "volatility": 0.01,
            "ratio": 130,
            "notes": "Low volatility — reduced requirement"
        },
        {
            "type": "nudge",
            "token": "ALPHA",
            "target": 1.00,
            "observed": 1.03,
            "nudge": "burn",
            "amount": 1200,
            "reason": "Observed price exceeded target",
            "pid_value": 0.07
        },
        {
            "type": "nudge",
            "token": "OMEGA",
            "target": 1.00,
            "observed": 0.95,
            "nudge": "mint",
            "amount": 800,
            "reason": "Below peg; mint to incentivize demand",
            "pid_value": -0.04
        }
    ]
