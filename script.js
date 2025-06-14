window.onload = function() {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const qrcodeContainer = document.getElementById('qrcode-container');
    const downloadBtn = document.getElementById('download-btn');
    const qrOutput = document.getElementById('qr-output');

    function generateQRCode() {
        const text = textInput.value.trim();

        qrOutput.hidden = true;
        qrcodeContainer.innerHTML = "";

        if (text) {
            new QRCode(qrcodeContainer, {
                text: text,
                width: 256,
                height: 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });

            setTimeout(() => {
                const qrImage = qrcodeContainer.querySelector('img');
                if (qrImage) {
                    const imgSrc = qrImage.src;
                    downloadBtn.href = imgSrc;
                    downloadBtn.download = 'qrcode.gpng';
                    
                    qrOutput.hidden = false;
                }
            }, 50);

        } else {
            alert("Please enter text or a URL!");
        }
    }

    generateBtn.addEventListener('click', generateQRCode);

    textInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            generateQRCode();
        }
    });
};