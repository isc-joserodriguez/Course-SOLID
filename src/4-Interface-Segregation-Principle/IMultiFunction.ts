export default interface IMultiFunction {
  print(): void;
  getPrintSpoolDetails(): void;
  scan(): void;
  scanPhoto(): void;
  fax(): void;
  internetFax(): void;
}
