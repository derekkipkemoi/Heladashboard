export const ColoGenerator = (props) => {
  const { name } = props;
  const hRange = [100, 360];
  const sRange = [100, 200];
  const lRange = [0, 65];
  const getHashOfString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  };

  const normalizeHash = (hash, min, max) => {
    return Math.floor((hash % (max - min)) + min);
  };
  const hash = getHashOfString(name);
  const h = normalizeHash(hash, hRange[0], hRange[1]);
  const s = normalizeHash(hash, sRange[0], sRange[1]);
  const l = normalizeHash(hash, lRange[0], lRange[1]);

  return `hsl(${h}, ${s}%, ${l}%)`;
};

export default ColoGenerator
