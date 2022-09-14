import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x1724a713bFd17F22d6e7FdC1775a57339f838724");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Captain's armband",
        description: "This NFT will give you access to footballDAO!",
        image: readFileSync("scripts/assets/soccer.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();