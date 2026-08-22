
//DOMContentLoaded: ensures that the page will execute once the whole page is loaded


document.addEventListener("DOMContentLoaded",()=>{

    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const emptyImg = document.querySelector(".empty-img");
    const todosContainer = document.querySelector(".todos-container");
    const progressBar = document.getElementById("progress");
    const progressNumbers = document.getElementById("numbers");


    const toggleEmptyState = () =>{
        emptyImg.style.display = taskList.children.length === 0 ? 'block' : 'none';
        //check karega if the taskList is empty or not if not empty, removes the emp-img
        //? is function implementation represents JavaScript's ternary operator (also known as the conditional operator). It serves as a concise, one-line shortcut for a standard if...else statement.

        todosContainer.style.width = taskList.children.length > 0 ? '100%' : '50%'; 
    };

    const updateProgress = (checkCompletion = true) => {
        const totalTasks = taskList.children.length;
        const completedTasks = taskList.querySelectorAll('.checkbox:checked').length;

        progressBar.style.width = totalTasks ? `${(completedTasks / totalTasks) * 100}%` : '0%';
        progressNumbers.textContent = `${completedTasks} / ${totalTasks}`;

        if(checkCompletion && totalTasks > 0 && completedTasks ===totalTasks){
            confetti();
        }
    };

    const saveTaskToLocalStorage = () => {
        const tasks = Array.from(taskList.querySelectorAll('li')).map (li => ({
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkbox').checked
        }));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const loadTaskFromLocalStorage = () => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(({text, completed}) => addTask(text, completed, false));
        toggleEmptyState();
        updateProgress();
    };

    const addTask=(text, completed = false, checkComplettion = true) => {
        const taskText = text || taskInput.value.trim();
        if (!taskText) {
            alert("please enter a task first!");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''} />
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;

        const checkbox = li.querySelector(".checkbox");
        const editBtn = li.querySelector(".edit-btn");

        if (completed) {
            li.classList.add('completed');
            editBtn.disabled = true;
            editBtn.style.opacity = '0.5';
            editBtn.style.pointerEvents = 'none';
        }

        checkbox.addEventListener("change", () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed', isChecked);
            editBtn.disabled = isChecked;
            editBtn.style.opacity = isChecked ? '0.5' : '1';
            editBtn.style.pointerEvents = isChecked ? 'none' : 'auto';
            updateProgress();
            saveTaskToLocalStorage();
        });

        editBtn.addEventListener("click", () => {
            if (!checkbox.checked) {
                taskInput.value = li.querySelector('span').textContent;
                li.remove();
                toggleEmptyState();
                updateProgress(false);
                saveTaskToLocalStorage();
            }
        });


        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
            toggleEmptyState();
            updateProgress();
            saveTaskToLocalStorage();
        });

        taskList.appendChild(li);
        taskInput.value = '';
        toggleEmptyState();
        updateProgress(checkComplettion);
        saveTaskToLocalStorage();
    };

    addTaskBtn.addEventListener("click", () => addTask());

    taskInput.addEventListener("keypress", (e) => { 
        if (e.key === 'Enter'){
        e.preventDefault();
            addTask();
        }
    });

    loadTaskFromLocalStorage();

}); 


const confetti = () =>{
    const jsConfetti = new JSConfetti()

    // Trigger colorful confetti
    jsConfetti.addConfetti({
    confettiColors: ['rgba(255, 255, 255, 0.45)', 'rgba(255, 255, 255, 0.12)', 'rgba(19, 29, 50, 0.8)'],
    confettiNumber: 100
    })

    // Or use emojis
    jsConfet // Basic usage
    ti.addConfetti({
    emojis: ['🎉', '✨', '💫', '🎊'],
    emojiSize: 50,
    confettiNumber: 30
    })
};