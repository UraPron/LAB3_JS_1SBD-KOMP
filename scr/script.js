    function swapText() {
        const block1 = document.getElementById('block1');
        const block6 = document.getElementById('block6');
        [block1.textContent, block6.textContent] = [block6.textContent, block1.textContent];
    }

    function generateFields() {
        const block3 = document.getElementById('block3');
        block3.innerHTML = `
            <input type="number" id="diag1" placeholder="Діагональ 1">
            <input type="number" id="diag2" placeholder="Діагональ 2">
            <button onclick="calculateArea()">Обчислити площу</button>
            <div id="result"></div>
        `;
    }

    function calculateArea() {
        const diag1 = document.getElementById('diag1').value;
        const diag2 = document.getElementById('diag2').value;
        const area = (diag1 * diag2) / 2;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Площа ромба: ${area}`;
    }

    function createForm() {
        const block3 = document.getElementById('block3');
        block3.innerHTML = `
            <div class="form-container">
                <input type="number" id="sideA" placeholder="Сторона A">
                <input type="number" id="sideB" placeholder="Сторона B">
                <input type="number" id="sideC" placeholder="Сторона C">
                <button onclick="checkTriangle()">Перевірити трикутник</button>
            </div>
        `;
    }

    function checkTriangle() {
        const sideA = parseFloat(document.getElementById('sideA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);
        const sideC = parseFloat(document.getElementById('sideC').value);

        let result;
        if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) {
            result = "Трикутник можна побудувати.";
        } else {
            result = "Трикутник не можна побудувати.";
        }

        alert(result);
        document.cookie = `triangleResult=${result}; path=/;`;
    }

    window.onload = function() {
        const cookies = document.cookie.split('; ').find(row => row.startsWith('triangleResult='));
        if (cookies) {
            const result = cookies.split('=')[1];
            const userConfirmed = confirm(`Збережений результат: ${result}. Бажаєте видалити дані з куків?`);
            if (userConfirmed) {
                document.cookie = 'triangleResult=; Max-Age=-99999999;';
                location.reload();
            } else {
                alert('Дані збережені. Оновіть сторінку.');
            }
        }
    }