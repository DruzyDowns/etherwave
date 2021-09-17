let initializeEtherwave = () => {
    const etherwaveFormContainer = document.getElementById("etherwave-form-container");
    const etherwaveFormElementCreation = document.createElement('form');
    etherwaveFormElementCreation.id = "etherwave-form";
    etherwaveFormElementCreation.innerHTML = `<label>If you like my work, please consider sending me a tip!</label><input value="0.01"><span>ETH</span><button>Tip</button>`;
    etherwaveFormContainer.appendChild(etherwaveFormElementCreation);
}

initializeEtherwave();

const web3 = new Web3(Web3.givenProvider);
const etherwaveForm = document.getElementById("etherwave-form");
const etherwaveScript = document.getElementById("etherwave-script");
const destinationWallet = etherwaveScript.getAttribute('data-destinationWallet');

const send = async function (amount, destination) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);

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
        alert("install a wallet already")
    }
})