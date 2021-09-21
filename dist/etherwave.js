let initializeEtherwave = () => {
    const etherwaveFormContainer = document.getElementById("etherwave-form-container");
    const etherwaveIconCreation = document.createElement('div');
    const etherwaveBadgeCreation = document.createElement('div');
    const etherwaveFormCreation = document.createElement('form');
    etherwaveIconCreation.id = "etherwave-icon";
    etherwaveBadgeCreation.id = "etherwave-badge";
    etherwaveFormCreation.id = "etherwave-form";
    etherwaveFormCreation.innerHTML = `<label>If you like my work, please consider sending me a tip!</label><input value="0.01"><span>ETH</span><button>Tip</button><p class="etherwave-branding">powered by <a href="https://etherwave.xyz" rel="noopener">etherwave</a></p>`;
    etherwaveFormContainer.appendChild(etherwaveFormCreation);
    etherwaveFormContainer.appendChild(etherwaveIconCreation);
    etherwaveFormContainer.appendChild(etherwaveBadgeCreation);
}

initializeEtherwave();

const web3 = new Web3(Web3.givenProvider);
const etherwaveBadge = document.getElementById("etherwave-badge");
const etherwaveIcon = document.getElementById("etherwave-icon");
const etherwaveForm = document.getElementById("etherwave-form");
const etherwaveScript = document.getElementById("etherwave-script");
const destinationWallet = etherwaveScript.getAttribute('data-destinationWallet');
//const etherwaveIcon = document.querySelector("div.menu-bar");
let etherwaveFormOpen = false;

etherwaveBadge.addEventListener("click", () => {
etherwaveForm.classList.toggle("is-open");
etherwaveIcon.classList.toggle("pulse");
etherwaveFormOpen = !etherwaveFormOpen;
});
// close.addEventListener("click", () => {
//     console.log('open');
//   menu.
//   menuOpen = !menuOpen;
// });

const send = async function (amount, destination) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(`connecting to wallet(s) ${accounts}`);

    const wei = web3.utils.toWei(amount, "ether");

    if (accounts.length > 0) {
        window.ethereum.request({ 
            method: "eth_sendTransaction",
            params: [{
                from: accounts[0],
                to: destination,
                value: web3.utils.toHex(wei)
            }] 
        })
    }
}

//if (window.ethereum) {
etherwaveForm.classList.add("has-eth");
//}

etherwaveForm.addEventListener("submit", function (event) {
    event.preventDefault()
    if (window.ethereum) { 
        const input = etherwaveForm.querySelector("input")
        send(input.value, destinationWallet)
    } else {
        etherwaveForm.style.backgroundColor = "red"
        
    }
})
