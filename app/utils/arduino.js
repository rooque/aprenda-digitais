const five = require("johnny-five");

const board = new five.Board({ repl: false });
let lcd;
let digital;
let digital2;
let digital3;

board.on("ready", () => {
  console.log("Arduino Pronto!");
  
  digital = new five.Led(4);
  digital2 = new five.Led(5);
  digital3 = new five.Led(6);

  lcd = new five.LCD({
    controller: "PCF8574"
  });

  board.emit("display_msg", "Arduino Pronto!", "----------------");
  board.emit("set_leds", 0, 0, 0);
});

board.on("fail", () => {
  console.log("Erro ao conectar o arduino!");
});

board.on("display_msg", (row1, row2) => {
  lcd.cursor(0, 0).print(row1);
  lcd.cursor(1, 0).print(row2);
});

board.on("set_leds", (a : integer, b : integer, s : integer) => {
  if (a == 1) {
    digital.on();
  } else {
    digital.off();
  }

  if (b == 1) {
    digital2.on();
  } else {
    digital2.off();
  }

  if (s == 1) {
    digital3.on();
  } else {
    digital3.off();
  }
});

board.on("s_inv", (a: boolean) => {
  let s = !a;
  if (s) {
    console.log("s = 1");
    board.emit("set_leds", 0, 0, 1);
  } else {
    console.log("s = 0");
    board.emit("set_leds", 1, 0, 0);
  }
});

board.on("s_and", (a: boolean, b: boolean) => {
  let s = a && b;
  let a_num;
  let b_num;
  let s_num;

  if (s) {
    s_num = 1;
  } else {
    s_num = 0;
  }

  if (a){
    a_num = 1;
  } else {
    a_num = 0;
  }

   if (b){
    b_num = 1;
  } else {
    b_num = 0;
  }

  board.emit("set_leds", a_num, b_num, s_num);
});

board.on("s_or", (a: boolean, b: boolean) => {
  let s = a || b;
  let a_num;
  let b_num;
  let s_num;

  if (s) {
    s_num = 1;
  } else {
    s_num = 0;
  }

  if (a){
    a_num = 1;
  } else {
    a_num = 0;
  }

   if (b){
    b_num = 1;
  } else {
    b_num = 0;
  }

  board.emit("set_leds", a_num, b_num, s_num);
});

export { board };
