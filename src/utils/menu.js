import inquirer from "inquirer";
import choice from "./choice.js";

const menu = async () => {
  let data;
  await inquirer
    .prompt([
      {
        name: "username",
        message: "nama user yang ingin dispam ?",
      },
      {
        type: "list",
        name: "choices",
        message: "Pilih channel ?",
        choices: choice,
      },
      {
        type: "list",
        name: "delay",
        message: "Pilih delay ?",
        choices: [1000, 2000, 5000, 10000],
      },
      {
        type: "list",
        name: "limit",
        message: "Pilih limit ?",
        choices: [10, 50, 100, 1000, "No limit"],
      },
    ])
    .then((answers) => {
      data = answers;
    });
  return data;
};

export default menu;
