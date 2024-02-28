import { DATA } from "./src/Data";
import { DataDefault } from "./src/Data/DataDefault";
declare global {
  var SaveFileSnapshot: DATA;
  var SaveFileData: DATA;
  var SaveFileDataSource: DataDefault;
  var SaveFileSnapshotSource: DataDefault;
}
