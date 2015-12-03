class PolarCoords {
  constructor(xOffset, yOffset) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  }
  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  xPx(r, angle) {
    return this.shiftX(r * Math.cos(this.degreesToRadians(angle)));
  }
  yPx(r, angle) {
    return this.shiftY(r * Math.sin(this.degreesToRadians(angle)));
  }
  shiftX(x) {
    return x + this.xOffset;
  }
  shiftY(y) {
    return y + this.yOffset;
  }
}

export default PolarCoords;
