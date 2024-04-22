function convertCurrency() {
            // 取得輸入的港幣金額
            var hkdAmount = document.getElementById('hkdAmount').value;
            
            // 定義港幣兌換台幣的匯率
            var exchangeRate = 3.9; // 假設的匯率，你可以根據實際情況修改
            
            // 換算台幣金額
            var twdAmount = hkdAmount * exchangeRate;
            
            // 顯示換算後的台幣金額
            document.getElementById('twdAmount').innerHTML = twdAmount.toFixed(2);
        }