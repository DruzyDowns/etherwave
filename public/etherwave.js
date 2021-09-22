const web3 = new Web3(Web3.givenProvider);
const etherwaveBadge = document.getElementById("etherwave-badge");
const etherwaveIcon = document.getElementById("etherwave-icon");
const etherwaveForm = document.getElementById("etherwave-form");
const etherwaveScript = document.getElementById("etherwave-script");
const destinationWallet = etherwaveScript.getAttribute('data-destinationWallet');
const etherwaveMessage = document.getElementById("etherwave-message");


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

etherwaveForm.addEventListener("submit", function (event) {
    event.preventDefault()
    if (window.ethereum) { 
        const input = etherwaveForm.querySelector("input")
        send(input.value, destinationWallet)
    } else {
        etherwaveMessage.innerText = "Wallet Connect coming soon for mobile! Please visit on desktop to donate, thanks!"
    }
})