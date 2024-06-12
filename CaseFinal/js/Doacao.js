document.getElementById('payment-method').addEventListener('change', function() {
    var pixInfo = document.getElementById('pix-info');
    var cardInfo = document.getElementById('card-info');
    if (this.value === 'pix') {
        pixInfo.style.display = 'block';
        cardInfo.style.display = 'none';
    } else if (this.value === 'credit-card' || this.value === 'debit-card') {
        pixInfo.style.display = 'none';
        cardInfo.style.display = 'block';
    } else {
        pixInfo.style.display = 'none';
        cardInfo.style.display = 'none';
    }
});
