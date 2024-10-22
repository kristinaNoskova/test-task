const formElement = document.querySelector('.form');

const createNewElement = () => {
    const newElement = document.createElement('pre');
    document.body.appendChild(newElement);
    return newElement;
};

const displayData = (data) => {
    return `Ответ сервера:\n id: ${data.id}\n title: ${data.title}\n body: ${data.body}`;
};

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
    }
};

const handleFormSubmit = () => {
    formElement.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formElement);
        const jsonData = JSON.stringify(Object.fromEntries(formData));
        const displayElement = createNewElement();
        displayElement.textContent = jsonData;

        const responseData = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
        if (responseData) {
            const result = displayData(responseData);
            alert(result);
        }
    });
};

handleFormSubmit();