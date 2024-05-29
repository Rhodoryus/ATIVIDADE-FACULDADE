//Robert Pereira Dos Santos-37021515//

export interface Task {
    id: number;
    name: string;
    date: Date;
}

export function addTask(tasks: Task[], task: Task): Task[] {
    return [...tasks, task];
}

export function updateTask(tasks: Task[], updatedTask: Task): Task[] {
    return tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
}

export function deleteTask(tasks: Task[], taskId: number): Task[] {
    return tasks.filter(task => task.id !== taskId);
}

export interface Project {
    id: number;
    name: string;
    tasks: Task[];
}

export function createProject(id: number, name: string): Project {
    return {
        id,
        name,
        tasks: []
    };
}

const tasks: Task[] = [];

const newTask: Task = { id: 1, name: "Nova tarefa", date: new Date() };
const updatedTask: Task = { id: 1, name: "Tarefa atualizada", date: new Date() };

const project: Project = createProject(1, "Novo Projeto");

let updatedTasks = addTask(tasks, newTask);
updatedTasks = updateTask(updatedTasks, updatedTask);
updatedTasks = deleteTask(updatedTasks, 1);

console.log(project);
console.log(updatedTasks);
