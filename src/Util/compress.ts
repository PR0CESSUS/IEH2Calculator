export function compress(string, encoding: CompressionFormat) {
  const byteArray = new TextEncoder().encode(string);
  const cs = new CompressionStream(encoding);
  const writer = cs.writable.getWriter();
  writer.write(byteArray);
  writer.close();
  return new Response(cs.readable).arrayBuffer();
}
export function decompress(byteArray, encoding) {
  const cs = new DecompressionStream(encoding);
  const writer = cs.writable.getWriter();
  writer.write(byteArray);
  writer.close();
  return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
    return new TextDecoder().decode(arrayBuffer);
  });
}
export function compressEquipmentLoadout(
  array: {
    kind: number;
    optionEffects: { kind: number; effectValue: number; level: number }[];
    forgeEffects: { kind: number; effectValue: number }[];
  }[]
) {
  console.log("compression");
  let buffer = Buffer.allocUnsafe(71 * 72);
  let offset = 0;

  for (let i = 0; i < 72; i++) {
    let offset = 0 + i * 71;
    let obj = array[i];
    buffer.writeUint8(obj.kind, offset);
    offset++;
    for (let index = 0; index < obj.optionEffects.length; index++) {
      // 1 byte representing kind
      // 4 byte representing effectValue
      // 1 byte representing level
      // 6 byte total
      buffer.writeUint8(obj.optionEffects[index].kind, offset);
      buffer.writeFloatLE(obj.optionEffects[index].effectValue, offset + 1);
      buffer.writeUint8(obj.optionEffects[index].level, offset + 5);
      offset += 6;
    }
    for (let index = 0; index < obj.forgeEffects.length; index++) {
      // 4 byte representing effectValue
      buffer.writeFloatLE(obj.forgeEffects[index].effectValue, offset);
      offset += 4;
    }
  }

  // console.log(buffer.toString("base64"));

  return buffer;
}
