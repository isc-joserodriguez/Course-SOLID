import IMultiFunction from "./IMultiFunction";

export default class MultifunctionPrinter implements IMultiFunction {
  print(): void {
    // Asume real and functional code
  }
  getPrintSpoolDetails(): void {
    // Asume real and functional code
  }
  scan(): void {
    // Asume real and functional code
  }
  scanPhoto(): void {
    // Asume real and functional code
  }
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
}
