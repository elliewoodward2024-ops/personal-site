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
        value: "ctf{just_ch3ck!ng_7he_c0d3?}"
    },

    {
        number: 3,
        value: "ctf{h3_h3_c00k!3_m0^st3r}"

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


document.cookie = "6gzSdYcO18dknH834YRgjQlVa8m1WRlf7Y0zp09teGqD84d6nAHe4MhKGjA9zxBiVXNmXhrC6cI2oEoz0V5Ic6H7EUAcEhuywuEHFRUIZcrRlgrmJovaxuNJQ93R0PPIQmfX1ng9ygAs8lZQ0n8Ww2BCIraOBNtWc2WEYV6Jxvtu8tu3Ciu3sTWnVHnIx1ZQCp5WfUJY0seQze5ORhlOjlkyGg15KCKeG17FU6zUetzjWTrwUAcC6UihMlwS8Jry4JG7K8fTuNyqMKcPsi6SDkJEn57cbFCcN4qnD1lywyWHEd7SoAgixkP9od3ENyAMJLh3U9CXFNb63IySKC3BHxUuQxHLupGHesisK5mVKcvfHkcDJ4V5RZEYZL4ICaXk7OhiiXJGR6w6ctf{h3_h3_c00k!3_m0^st3r}clgmMcEQnXRBbwM68ObCcabswuBv8pT874WkcGFqGMSQDKkSFVTU6jd6YOP4SZnDQEKNkpXQJWqI8qWHhVdcjcBcNBTcI2eE;";