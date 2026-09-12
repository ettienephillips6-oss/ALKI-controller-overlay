const status = document.getElementById("status");

const buttons = {
  a: document.getElementById("button-a"),
  b: document.getElementById("button-b"),
  x: document.getElementById("button-x"),
  y: document.getElementById("button-y")
};

let gamepadIndex = null;

window.addEventListener("gamepadconnected", (event) => {
  gamepadIndex = event.gamepad.index;

  status.textContent = `Connected: ${event.gamepad.id}`;

  console.log("Controller connected:", event.gamepad);
});

window.addEventListener("gamepaddisconnected", () => {
  gamepadIndex = null;

  status.textContent = "Controller disconnected";
});

function setPressed(element, pressed) {
  element.classList.toggle("pressed", pressed);
}

function update() {
  const gamepads = navigator.getGamepads();

  if (gamepadIndex !== null) {
    const gamepad = gamepads[gamepadIndex];

    if (gamepad) {
      /*
        Standard Xbox mapping:

        0 = A
        1 = B
        2 = X
        3 = Y
      */

      setPressed(buttons.a, gamepad.buttons[0].pressed);
      setPressed(buttons.b, gamepad.buttons[1].pressed);
      setPressed(buttons.x, gamepad.buttons[2].pressed);
      setPressed(buttons.y, gamepad.buttons[3].pressed);
    }
  }

  requestAnimationFrame(update);
}

update();