import { WaveGroup } from "./waveGroup.js";

class App {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private pixelRatio: number;
  private waveGroup: WaveGroup;
  private stageWidth: number;
  private stageHeight: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    // 레티나 디스플레이 대응
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  console.log("?");
  new App();
};
