function encrypt() {
    const shift = parseInt(document.getElementById('shift').value);
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    const startTime = performance.now();

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char.match(/[a-z]/i)) {
            let code = inputText.charCodeAt(i);

            if (char >= 'a' && char <= 'z') {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else if (char >= 'A' && char <= 'Z') {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
        }

        outputText += char;
    }

    const endTime = performance.now();
    const encryptionTime = endTime - startTime;

    document.getElementById('outputText').value = outputText;
    document.getElementById('encryptionTime').innerText = `Encryption Time: ${encryptionTime.toFixed(2)} milliseconds`;
}
