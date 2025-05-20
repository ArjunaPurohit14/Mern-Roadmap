        const addTodo = () => {
             const ul = document.querySelector("#todoList");
            const input = document.querySelector("#todoInput");
           const li = document.createElement("li");
            li.textContent = input.value;
            ul.appendChild(li);
            input.value = "";
        }

        const clearTodo = () => {
            const ul = document.querySelector("#todoList");
            const firstItem = ul.lastElementChild;
            if (firstItem) {
                ul.removeChild(firstItem);
            }

        }