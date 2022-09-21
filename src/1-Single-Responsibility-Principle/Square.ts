export default class Square {
  side: number = 5;
  highResolutionMonitor: boolean = true;

  draw(): void {
    if(this.highResolutionMonitor){
        // Render a high resolution image of a square
    } else {
        // Render a normal image of a square
    }
  }

  rotate(degree: number): void {
    // Rotate the image of the square clockwise to
    // the required degree and re-render
  }
}
