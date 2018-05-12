const fs = require("fs");
const query = require("micro-query");
const exec = require("node-exec-promise").exec;

const TIMEOUT = 3000;
const PUPPETEER_CONFIG = "./puppeteerConfig.json";

const getTmpPath = () => `/tmp/${Math.random()}.mmd`;

const readFile = path =>
  new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(err);
      else res(data.toString());
    });
  });

const writeFile = (path, data, opts = "utf8") =>
  new Promise((res, rej) => {
    fs.writeFile(path, data, opts, err => {
      if (err) rej(err);
      else res();
    });
  });

const svgError = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="300px" viewBox="0 0 800 300">
  <text x="10" y="10" font-size="32">Invalid mermaid data :/</text>
</svg>`;

const timeout = ({ delay = TIMEOUT } = {}) =>
  new Promise((resolve, reject) => setTimeout(() => reject("timeout"), delay));

const execWithTimeout = cmd => Promise.race([timeout(), exec(cmd)]);

module.exports = async (req, res) => {
  const params = query(req);
  const q = params.q;
  const width = params.width || 800;
  const height = params.height || 600;
  if (q) {
    res.setHeader("Content-Type", "image/svg+xml");
    const textPath = getTmpPath();
    const svgPath = `${textPath}.svg`;
    const write = await writeFile(textPath, q);
    const cmd = `./node_modules/.bin/mmdc -i ${textPath} -o ${svgPath} -w ${width} -H ${height} -p ${PUPPETEER_CONFIG}`;
    return execWithTimeout(cmd).then(
      ({ stdout, stderr }) => readFile(svgPath),
      err => {
        console.log(`ERR: ${err} on ${cmd}`);
        return svgError;
      }
    );
  } else {
    res.setHeader("Content-Type", "text/html");
    return await readFile("./index.html");
  }
};
