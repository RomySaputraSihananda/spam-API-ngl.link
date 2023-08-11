import inquirer from "inquirer";
import choice from "./choice.js";

const menu = async () => {
  console.log(
    `                                  :~~~^^.          .PBGP5J?!         `
  );
  console.log(
    `       .::..      .??7!~:.     ^YB&@@@@@&#GY!.     7@@@@@@@G         `
  );
  console.log(
    `      .B&&&##BP7  J@@@@@@B.   Y@@@@@@@@@@@@@@&J    G@@@@@@@!         `
  );
  console.log(
    `      ?@@@@@@@@@: G@@@@@@5  .P@@@@@@@#YG@@@@@@@^  :@@@@@@@#.         `
  );
  console.log(
    `      G@@@@@@@@@7.&@@@@@@~  Y@@@@@@@B. .&@@&&&G.  7@@@@@@@Y          `
  );
  console.log(
    `     :@@@@@@@@@@G^@@@@@@B  ^@@@@@@@&^   !777!:    P@@@@@@@~          `
  );
  console.log(
    `     7@@@@@@@@@@@5@@@@@@Y  J@@@@@@@P.PB##&&&@J   .#@@@@@@#.          `
  );
  console.log(
    `     5@@@@@@@@@@@@@@@@@@~  Y@@@@@@@Y #@@@@@@@@~  :&@@@@@@G  ..:      `
  );
  console.log(
    `     B@@@@@&5@@@@@@@@@@&.  J@@@@@@@G ~GB@@@@@@B  ^@@@@@@@&BB#&&5     `
  );
  console.log(
    `    :&@@@@@#:#@@@@@@@@@G   :&@@@@@@@P7JB@@@@@@B  .G@@@@@@@@@@@@@?    `
  );
  console.log(
    `    ~@@@@@@B 7@@@@@@@@@5    ~#@@@@@@@@@@@@@@@G:    J&@@@@@@@@@@@&:   `
  );
  console.log(
    `    !@@@@@@G  G@@@@@@@@?     .?G&@@@@@@@@@&G!       :Y#&#BGPYJ?!~.   `
  );
  console.log(
    `    !@@@@@@G  :B&@@@@@@7        :~?YPGG5J!:           ...            `
  );
  console.log(
    `    .!? Y5PBJ :^ ~!!77.                                              \n`
  );

  let data;
  await inquirer
    .prompt([
      {
        name: "username",
        message: "nama user yang ingin dispam :",
      },
      {
        type: "list",
        name: "choices",
        message: "Pilih channel :",
        choices: choice,
      },
      {
        type: "list",
        name: "delay",
        message: "Pilih delay :",
        choices: [1000, 2000, 5000, 10000],
      },
      {
        type: "list",
        name: "limit",
        message: "Pilih limit :",
        choices: [10, 50, 100, 1000, "No limit"],
      },
    ])
    .then((answers) => {
      data = answers;
    });
  return data;
};

export default menu;
