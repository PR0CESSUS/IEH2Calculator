export function encoder(buffer: ArrayBuffer) {
  let str = "";

  for (let index = 0; index < buffer.byteLength; index++) {
    const byte = buffer[index];
    str += EncoderDiscord[byte];
    // str += encoderDiscord(byte);
  }
  return str;
}

export function decoder(str: string) {
  let buffer = new TextEncoder().encode(str);
  // let buffer = new ArrayBuffer(str.length);

  for (let index = 0; index < str.length; index++) {
    buffer[index] = EncoderDiscord[str[index]];
  }
  // console.log(new Uint8Array(buffer));

  return new Uint8Array(buffer);
}

function encoderDiscord(byte) {
  switch (byte) {
    case 0:
      return "0";
    case 1:
      return "1";
    case 2:
      return "2";
    case 3:
      return "3";
    case 4:
      return "4";
    case 5:
      return "5";
    case 6:
      return "6";
    case 7:
      return "7";
    case 8:
      return "8";
    case 9:
      return "9";
    case 10:
      return "a";
    case 11:
      return "ą";
    case 12:
      return "b";
    case 13:
      return "c";
    case 14:
      return "ć";
    case 15:
      return "d";
    case 16:
      return "e";
    case 17:
      return "ę";
    case 18:
      return "f";
    case 19:
      return "g";
    case 20:
      return "h";
    case 21:
      return "i";
    case 22:
      return "j";
    case 23:
      return "k";
    case 24:
      return "l";
    case 25:
      return "ł";
    case 26:
      return "m";
    case 27:
      return "n";
    case 28:
      return "ń";
    case 29:
      return "o";
    case 30:
      return "ó";
    case 31:
      return "p";
    case 32:
      return "q";
    case 33:
      return "r";
    case 34:
      return "s";
    case 35:
      return "ś";
    case 36:
      return "t";
    case 37:
      return "u";
    case 38:
      return "v";
    case 39:
      return "w";
    case 40:
      return "x";
    case 41:
      return "y";
    case 42:
      return "z";
    case 43:
      return "ż";
    case 44:
      return "ź";
    case 45:
      return "A";
    case 46:
      return "Ą";
    case 47:
      return "B";
    case 48:
      return "C";
    case 49:
      return "Ć";
    case 50:
      return "D";
    case 51:
      return "E";
    case 52:
      return "Ę";
    case 53:
      return "F";
    case 54:
      return "G";
    case 55:
      return "H";
    case 56:
      return "I";
    case 57:
      return "J";
    case 58:
      return "K";
    case 59:
      return "L";
    case 60:
      return "Ł";
    case 61:
      return "M";
    case 62:
      return "N";
    case 63:
      return "Ń";
    case 64:
      return "O";
    case 65:
      return "Ó";
    case 66:
      return "P";
    case 67:
      return "Q";
    case 68:
      return "R";
    case 69:
      return "S";
    case 70:
      return "Ś";
    case 71:
      return "T";
    case 72:
      return "U";
    case 73:
      return "V";
    case 74:
      return "W";
    case 75:
      return "X";
    case 76:
      return "Y";
    case 77:
      return "Z";
    case 78:
      return "Ż";
    case 79:
      return "Ź";
    case 80:
      return "à";
    case 81:
      return "À";
    case 82:
      return "á";
    case 83:
      return "Á";
    case 84:
      return "â";
    case 85:
      return "Â";
    case 86:
      return "ã";
    case 87:
      return "Ã";
    case 88:
      return "ä";
    case 89:
      return "Ä";
    case 90:
      return "å";
    case 91:
      return "Å";
    case 92:
      return "æ";
    case 93:
      return "Æ";
    case 94:
      return "ç";
    case 95:
      return "Ç";
    case 96:
      return "è";
    case 97:
      return "È";
    case 98:
      return "é";
    case 99:
      return "É";
    case 100:
      return "ê";
    case 101:
      return "Ê";
    case 102:
      return "ë";
    case 103:
      return "Ë";
    case 104:
      return "ì";
    case 105:
      return "Ì";
    case 106:
      return "í";
    case 107:
      return "Í";
    case 108:
      return "î";
    case 109:
      return "Î";
    case 110:
      return "ï";
    case 111:
      return "Ï";
    case 112:
      return "ð";
    case 113:
      return "Ð";
    case 114:
      return "ñ";
    case 115:
      return "Ñ";
    case 116:
      return "ò";
    case 117:
      return "Ò";
    case 118:
      return "ô";
    case 119:
      return "Ô";
    case 120:
      return "õ";
    case 121:
      return "Õ";
    case 122:
      return "ö";
    case 123:
      return "Ö";
    case 124:
      return "ø";
    case 125:
      return "Ø";
    case 126:
      return "ù";
    case 127:
      return "Ù";
    case 128:
      return "ú";
    case 129:
      return "Ú";
    case 130:
      return "û";
    case 131:
      return "Û";
    case 132:
      return "ü";
    case 133:
      return "Ü";
    case 134:
      return "ý";
    case 135:
      return "Ý";
    case 136:
      return "ÿ";
    case 137:
      return "Ÿ";
    case 138:
      return "ā";
    case 139:
      return "Ā";
    case 140:
      return "ă";
    case 141:
      return "Ă";
    case 142:
      return "ĉ";
    case 143:
      return "Ĉ";
    case 144:
      return "ċ";
    case 145:
      return "Ċ";
    case 146:
      return "č";
    case 147:
      return "Č";
    case 148:
      return "ď";
    case 149:
      return "Ď";
    case 150:
      return "đ";
    case 151:
      return "Đ";
    case 152:
      return "ē";
    case 153:
      return "Ē";
    case 154:
      return "ĕ";
    case 155:
      return "Ĕ";
    case 156:
      return "ė";
    case 157:
      return "Ė";
    case 158:
      return "ě";
    case 159:
      return "Ě";
    case 160:
      return "ĝ";
    case 161:
      return "Ĝ";
    case 162:
      return "ğ";
    case 163:
      return "Ğ";
    case 164:
      return "ġ";
    case 165:
      return "Ġ";
    case 166:
      return "ģ";
    case 167:
      return "Ģ";
    case 168:
      return "ĥ";
    case 169:
      return "Ĥ";
    case 170:
      return "ħ";
    case 171:
      return "Ħ";
    case 172:
      return "ĩ";
    case 173:
      return "Ĩ";
    case 174:
      return "ī";
    case 175:
      return "Ī";
    case 176:
      return "ĭ";
    case 177:
      return "Ĭ";
    case 178:
      return "į";
    case 179:
      return "Į";
    case 180:
      return "ĳ";
    case 181:
      return "Ĳ";
    case 182:
      return "ĵ";
    case 183:
      return "Ĵ";
    case 184:
      return "ķ";
    case 185:
      return "Ķ";
    case 186:
      return "ņ";
    case 187:
      return "Ņ";
    case 188:
      return "ň";
    case 189:
      return "Ň";
    case 190:
      return "ō";
    case 191:
      return "Ō";
    case 192:
      return "ŏ";
    case 193:
      return "Ŏ";
    case 194:
      return "ő";
    case 195:
      return "Ő";
    case 196:
      return "œ";
    case 197:
      return "Œ";
    case 198:
      return "ŕ";
    case 199:
      return "Ŕ";
    case 200:
      return "ŗ";
    case 201:
      return "Ŗ";
    case 202:
      return "ř";
    case 203:
      return "Ř";
    case 204:
      return "ŝ";
    case 205:
      return "Ŝ";
    case 206:
      return "ş";
    case 207:
      return "Ş";
    case 208:
      return "š";
    case 209:
      return "Š";
    case 210:
      return "ţ";
    case 211:
      return "Ţ";
    case 212:
      return "ť";
    case 213:
      return "Ť";
    case 214:
      return "ŧ";
    case 215:
      return "Ŧ";
    case 216:
      return "ũ";
    case 217:
      return "Ũ";
    case 218:
      return "ū";
    case 219:
      return "Ū";
    case 220:
      return "ŭ";
    case 221:
      return "Ŭ";
    case 222:
      return "ů";
    case 223:
      return "Ů";
    case 224:
      return "ű";
    case 225:
      return "Ű";
    case 226:
      return "ų";
    case 227:
      return "Ų";
    case 228:
      return "ŵ";
    case 229:
      return "Ŵ";
    case 230:
      return "ŷ";
    case 231:
      return "Ŷ";
    case 232:
      return "ž";
    case 233:
      return "Ž";
    case 234:
      return "ƀ";
    case 235:
      return "Ƀ";
    case 236:
      return "ƅ";
    case 237:
      return "Ƅ";
    case 238:
      return "ƈ";
    case 239:
      return "Ƈ";
    case 240:
      return "ƌ";
    case 241:
      return "Ƌ";
    case 242:
      return "ƒ";
    case 243:
      return "Ƒ";
    case 244:
      return "ƙ";
    case 245:
      return "Ƙ";
    case 246:
      return "ƕ";
    case 247:
      return "Ƕ";
    case 248:
      return "ļ";
    case 249:
      return "Ļ";
    case 250:
      return "ľ";
    case 251:
      return "Ľ";
    case 252:
      return "ŀ";
    case 253:
      return "Ŀ";
    case 254:
      return "ĺ";
    case 255:
      return "Ĺ";
    default:
      return " ";
  }
}

enum EncoderDiscord {
  a,
  A,
  ą,
  Ą,
  b,
  B,
  c,
  C,
  ć,
  Ć,
  d,
  D,
  e,
  E,
  ę,
  Ę,
  f,
  F,
  g,
  G,
  h,
  H,
  i,
  I,
  j,
  J,
  k,
  K,
  l,
  L,
  ł,
  Ł,
  m,
  M,
  n,
  N,
  ń,
  Ń,
  o,
  O,
  ó,
  Ó,
  p,
  P,
  q,
  Q,
  r,
  R,
  s,
  S,
  ś,
  Ś,
  t,
  T,
  u,
  U,
  v,
  V,
  w,
  W,
  x,
  X,
  y,
  Y,
  z,
  Z,
  ż,
  Ż,
  ź,
  Ź,
  à,
  À,
  á,
  Á,
  â,
  Â,
  ã,
  Ã,
  ä,
  Ä,
  å,
  Å,
  æ,
  Æ,
  ç,
  Ç,
  è,
  È,
  é,
  É,
  ê,
  Ê,
  ë,
  Ë,
  ì,
  Ì,
  í,
  Í,
  î,
  Î,
  ï,
  Ï,
  ð,
  Ð,
  ñ,
  Ñ,
  ò,
  Ò,
  ô,
  Ô,
  õ,
  Õ,
  ö,
  Ö,
  ø,
  Ø,
  ù,
  Ù,
  ú,
  Ú,
  û,
  Û,
  ü,
  Ü,
  ý,
  Ý,
  ÿ,
  Ÿ,
  ā,
  Ā,
  ă,
  Ă,
  ĉ,
  Ĉ,
  ċ,
  Ċ,
  č,
  Č,
  ď,
  Ď,
  đ,
  Đ,
  ē,
  Ē,
  ĕ,
  Ĕ,
  ė,
  Ė,
  ě,
  Ě,
  ĝ,
  Ĝ,
  ğ,
  Ğ,
  ġ,
  Ġ,
  ģ,
  Ģ,
  ĥ,
  Ĥ,
  ħ,
  Ħ,
  ĩ,
  Ĩ,
  ī,
  Ī,
  ĭ,
  Ĭ,
  į,
  Į,
  ĳ,
  Ĳ,
  ĵ,
  Ĵ,
  ķ,
  Ķ,
  ņ,
  Ņ,
  ň,
  Ň,
  ō,
  Ō,
  ŏ,
  Ŏ,
  ő,
  Ő,
  œ,
  Œ,
  ŕ,
  Ŕ,
  ŗ,
  Ŗ,
  ř,
  Ř,
  ŝ,
  Ŝ,
  ş,
  Ş,
  š,
  Š,
  ţ,
  Ţ,
  ť,
  Ť,
  ŧ,
  Ŧ,
  ũ,
  Ũ,
  ū,
  Ū,
  ŭ,
  Ŭ,
  ů,
  Ů,
  ű,
  Ű,
  ų,
  Ų,
  ŵ,
  Ŵ,
  ŷ,
  Ŷ,
  ž,
  Ž,
  ƀ,
  Ƀ,
  ƅ,
  Ƅ,
  ƈ,
  Ƈ,
  ƌ,
  Ƌ,
  ƒ,
  Ƒ,
  ƙ,
  Ƙ,
  ƕ,
  Ƕ,
  ļ,
  Ļ,
  ľ,
  Ľ,
  ŀ,
  Ŀ,
  ĺ,
  Ĺ,
  þ,
  Þ,
  ƞ,
  Ƞ,
  ơ,
  Ơ,
  ƣ,
  Ƣ,
  ƥ,
  Ƥ,
}
