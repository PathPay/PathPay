# PathPay
PathPay aggregate the best route to get your USDT to merchant successfully.
# PathPay – Payment Orchestration & Global Checkout Intelligence

**Tagline:** From stablecoins to successful global payments.

## Vision
Enable users in restricted banking regions to pay global merchants reliably. Today, we orchestrate payments; tomorrow, we become a full consumer neobank.

## Problem
- USD/foreign currency access is limited.
- Online merchants reject local/crypto cards inconsistently.
- Users waste hours and pay hidden fees trying to checkout globally.

## Solution
- **Phase 1:** Payment Orchestrator
  - Aggregate which payment rail will work.
  - Suggest optimal route.
  - Minimize hidden fees, FX loss, and retries.
- **Phase 2:** Full Consumer Neobank
  - Integrated stablecoin wallet.
  - Smart cards + merchant routing.
  - AI-powered checkout intelligence.

## How It Works
1. User inputs checkout URL / merchant.
2. System detects merchant, region, processor.
3. Aggregates success probability & recommends route.
4. (Future) Executes payment via stablecoins or fallback rails.

## Current Status
- Survey collecting payment failure patterns [Google Form](https://forms.gle/AV6PuvcGagaCBrV36)
- Manual routing tests for popular merchants underway.

## Tech Stack (MVP)
- Frontend: Next.js / Figma prototype
- Backend: Supabase (database + auth)
- AI: OpenAI API (for aggregation & recommendation engine)
- Settlement: Mantle Layer-2 (USDT/USDC)
