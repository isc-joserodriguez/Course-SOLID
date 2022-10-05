import IMultiFunction from "./IMultiFunction";

export default class Scanner implements IMultiFunction {
  scan(): void {
    // Asume real and functional code
  }
  scanPhoto(): void {
    // Asume real and functional code
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
}
