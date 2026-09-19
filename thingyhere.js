const flagChecker = document.querySelector("#flag")
const outputThing = document.querySelector("#msg")
const foundFlags = new Set();


const flags = [
    {
        number: 1,
        value: "ctf{Gr3@t_j06_y0U_f0u^d_the_f!rst_0ne}"
    },

    {
        number: 2,
        value: "ctf{just_ch3ck!ng_7he_c0d3?}"

    }
];

function toggleOn(element) {
    element.classList.toggle('active');
}

let typingTimer;

function checkIfFlag(value) {
    const flag = flags.find(item => item.value === value);

    if (!flag) {
        return null;
    }

    return flag;
}

function handleInput() {
    const value = flagChecker.value;
    const flag = checkIfFlag(value);


    if (!flag) {
        outputThing.textContent = "No this is not a flag, good try.";
        return;
    }
    if (foundFlags.has(flag.number)) {
        outputThing.textContent = `You already found Flag #${flag.number}.`;
        return;
    }

    foundFlags.add(flag.number);

    outputThing.textContent = `You found Flag #${flag.number}!`;

    document.querySelector(`#flag${flag.number}`).checked = true;

    flagChecker.value = "";

}


flagChecker.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {

        handleInput();

    }
});