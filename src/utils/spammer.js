import generateQuestion from "./questions.js";
import choice from "./choice.js";

let i = 1;

const generateType = (select) => {
  if (select === choice[0]) {
    const index = Math.floor(Math.random() * choice.length);
    if (index === 0) return generateType(select);
    const type = choice[index];
    return type === "Basic" ? "" : type;
  }
  return select === "Basic" ? "" : select;
};

const check = async (username) => {
  try {
    const req = await fetch("https://ngl.link/api/submit", {
      method: "POST",
      body: `username=${username}&question='&deviceId=random...&gameSlug=&referrer=`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (req.status === 404) return 404;
    if (req.status === 200) return 200;
  } catch (err) {
    return 500;
  }
};

const spam = async ({ username, choices, delay, limit }) => {
  const status = await check(username);
  if (status === 200) console.log("\nName Found !");
  if (status === 404) return console.log("\nName Not Found !");
  if (status === 500) return console.log("\nConnection Error !");

  const loop = setInterval(async () => {
    const question = generateQuestion();
    const type = generateType(choices);

    console.log(
      `\n=> Spam ${i}\n=> Send : "${question}" \n=> Name : ${username} \n=> Type : ${
        type === "" ? "Basic" : type
      }`
    );

    try {
      const req = await fetch("https://ngl.link/api/submit", {
        method: "POST",
        body: `username=${username}&question=${question}&deviceId=random...&gameSlug=${type.toLowerCase()}&referrer=`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (req.status !== 200) {
        if (limit !== "No limit") if (i === limit) return clearInterval(loop);
        i++;
        return console.log(`=> Status : Failed`);
      }
      console.log(`=> Status : Success`);
    } catch (err) {
      console.log(`=> Status : Failed`);
    }
    if (limit !== "No limit") if (i === limit) return clearInterval(loop);
    i++;
  }, delay);
};

export default spam;
