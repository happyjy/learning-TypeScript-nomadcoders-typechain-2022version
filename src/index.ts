import crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    // #point1-1: this.blocks이렇게 반환하면 this.blocks를 직접 변경 시킬 수 있다.
    return [...this.blocks];
  }
  public getOiriginBlocks() {
    return this.blocks;
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

const shallowCopyBlocks = blockchain.getBlocks();
const originBlocks = blockchain.getOiriginBlocks();

// # point1-2: shallowCopy했기 때문에 push한 내용이 반영 되지 않았다.
shallowCopyBlocks.push(new Block("hack", 111, "hack"));
console.log("--- shallowCopyBlocks.push result ---");
console.log("shallowCopyBlocks: ", blockchain.getBlocks().at(-1));
console.log("originBlocks: ", blockchain.getOiriginBlocks().at(-1));

// # point1-3: origin array가 반환 됐기 때문에 push한 내용이 반영 됐다.
console.log("--- originBlocks.push result ---");
originBlocks.push(new Block("hack", 111, "hack"));
console.log("shallowCopyBlocks: ", blockchain.getBlocks().at(-1));
console.log("originBlocks: ", blockchain.getOiriginBlocks().at(-1));
