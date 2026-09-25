const flagChecker = document.querySelector("#flag")
const outputThing = document.querySelector("#msg")
const foundFlags = new Set();
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');



menuBtn.addEventListener('click', () => { sidebar.classList.add('active'); });
closeBtn.addEventListener('click', () => { sidebar.classList.remove('active'); });

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && event.target !== menuBtn) {
        sidebar.classList.remove('active');
    }
}
);


const flags = [
    {
        number: 1,
        value: "ctf{Gr3@t_j06_y0U_f0u^d_the_f!rst_0ne}"
    },
    {
        number: 2,
        value: "ctf{7h3_b@s!cs_of_b@se64}"
    },
    {
        number: 3,
        value: "ctf{y0ur_f!r$t_MD5_h@sh}"
    },
    {
        number: 4,
        value: "ctf{@LwayS_n33d_a_c0mb0_!n_th3r3}"
    }


];

function toggleOn(element, event) {
    event.stopPropagation();
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


