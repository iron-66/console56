//Получение значения параметра id из URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');


// Функция для получения данных заказов от сервера
async function getManagerOrders() {
    try {
        const response = await fetch('/check-manager-actual');
        if (!response.ok) {
        throw new Error('Request failed');
        }
        const orders = await response.json();
        // Здесь вы можете использовать полученные данные для создания блоков на странице
        console.log(orders);
    } catch (error) {
        console.error('Error:', error);
    }
}
// Вызов функции для получения данных заказов
getManagerOrders();
  
window.addEventListener("DOMContentLoaded", (event) => {
    // Переход в окно добавления заказа
    const newOrd = document.getElementById('new-order');
    newOrd.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/manager_new/?id=${id}`;
        window.location.href = redirectUrl;
    });

    // Переход в архив заказов
    const archiveOrd = document.getElementById('orders-archive');
    archiveOrd.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/manager_archive/?id=${id}`;
        window.location.href = redirectUrl;
    });

    // Переход в личный кабинет
    const lk = document.getElementById('lk');
    lk.addEventListener('click', () => {
        const redirectUrl = `https://iron-66.github.io/Console56/manager_my/?id=${id}`;
        window.location.href = redirectUrl;
    });
});