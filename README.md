<div align="center">
<img height="180" src="https://avatars.githubusercontent.com/u/84755822?s=200&v=4"/>
<h1 style="margin-top:-15px;">v3-api-client-ts</h1>
</div>

## Quick Start

Typescript client library for interacting with parcl-v3 via an api. Provides easy ways to trade and manage margin accounts.

Api and client library are in alpha. Code may change.

## Getting Started

To use the typescript library, add the library to your dependencies in your `package.json`:

```bash
npm install @parcl-oss/v3-api-client
```

## Usage

```typescript
import { ParclV3ApiClient } from "@parcl-oss/v3-api-client";

const v3ApiClient = new ParclV3ApiClient();
```

## Examples

For the full code and other examples please see [examples repo](https://github.com/ParclFinance/v3-api-examples).

Simplified trade:

```typescript
import {
  setupWalletAndV3ApiClientAndRpcClient,
  deserializeTransactionSetBlockhashAndSignMessage,
  sendAndConfirmTransaction,
} from "../utils";

(async function main() {
  // See utils for more info on setup
  const { wallet, v3ApiClient, rpcClient } =
    setupWalletAndV3ApiClientAndRpcClient();

  // Setup trade inputs
  const marginAccountId = 0; // Margin account with id 0
  const marketId = 23; // SOL market
  const sizeDelta = -20; // 0.00002 SOL short
  const slippageToleranceBps = 200; // 2%

  // Fetch trade transaction and latest blockhash.
  const [response, { blockhash: latestBlockhash }] = await Promise.all([
    v3ApiClient.transactions.getModifyPositionTransaction({
      modifyPositionPayload: {
        owner: wallet.publicKey.toBase58(),
        marginAccountId: marginAccountId.toString(),
        marketId: marketId,
        sizeDelta: sizeDelta.toString(),
        slippageToleranceBps,
      },
    }),
    rpcClient.getLatestBlockhash(),
  ]);

  // Deserialize trade transaction into a versioned transaction. Set blockhash and sign transaction.
  const tx = deserializeTransactionSetBlockhashAndSignMessage(
    response.transaction,
    wallet,
    latestBlockhash
  );

  // Send trade transaction
  console.log("Sending modify_position transaction...");
  const signature = await sendAndConfirmTransaction(tx, rpcClient);
  console.log("Signature: ", signature);
})();
```

## Additional Resources

- [OpenAPI Documentation](https://v3.parcl-api.com/docs): See available routes.
- [Examples Repo](https://github.com/ParclFinance/v3-api-examples): Examples of common use cases.
- [Parcl Website](https://parcl.co): Check out the official Parcl website for additional information and resources.
