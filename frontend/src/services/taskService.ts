import axios from "axios";
import { CreateTaskPayload, Task } from "../types/task";
import api from "./api";

const baseAPI = "/task";

export const getAllTasks = async () => {
    try {
        const userId = localStorage.getItem("userId");
        const { data: response } = await api.get<Task[]>(`${baseAPI}/user/${userId}`);
        return response;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            console.error("Axios error:", err.response?.data || err.message);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
        return null;
    }
};

export const getTaskById = async (taskId: number) => {
    try {
        const { data: response } = await api.get<Task>(`${baseAPI}/${taskId}`);
        return response;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            console.error("Axios error:", err.response?.data || err.message);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
        return null;
    }
}

export const handleAddTask = async (task: CreateTaskPayload) => {
    try {
        const userId = localStorage.getItem("userId");
        const data = await api.post<Task>(`${baseAPI}/user/${userId}`, task);
        return data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const messages = err.response?.data.detail || err.message;
            const status = err.response?.data.status || err.message;
            console.log(messages, status);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
    }
}

export const handleAddSession = async (taskId: number) => {
    try {
        const { data } = await api.put<Task>(`${baseAPI}/${taskId}/session`);
        return data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const messages = err.response?.data.detail || err.message;
            const status = err.response?.data.status || err.message;
            console.log(messages, status);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
    }
}

export const handleEditTask = async (id: number, task: CreateTaskPayload) => {
    try {
        const { data } = await api.put<Task>(`${baseAPI}/${id}`, task);
        return data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const messages = err.response?.data.detail || err.message;
            const status = err.response?.data.status || err.message;
            console.log(messages, status);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
    }
}

export const handleDeleteTask = async (id: number) => {
    try {
        const { data } = await api.delete<Task>(`${baseAPI}/${id}`);
        return data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            const messages = err.response?.data.detail || err.message;
            const status = err.response?.data.status || err.message;
            console.log(messages, status);
        } else {
            console.error("Unexpected error:", (err as Error).message);
        }
    }
}

//   const handleEditTask = async (id: number, title: string, description: string, hasPriority: boolean) => {
//     setLoading(true);
//     setSelectedId(id);
//     try {
//       const { data: response } = await axios.put<Task>(`http://localhost:8080/task/${id}`, {
//         title,
//         description,
//         hasPriority
//       });
//       fetchTasks();
//       setOnDashboard(true);
//       setOnAddTask(false);
//       const prevMessages = messages;
//       const id2 = Date.now();
//       setMessages([...prevMessages, { id: id2, message: "Successfully edited the task!" }]);
//       setTimeout(() => {
//         const newMessages = (messages: Message[]) => messages.filter((message) => message.id != id2);
//         setMessages(newMessages);
//       }, 5000);
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err)) {
//         const messages = err.response?.data.detail || err.message;
//         const status = err.response?.data.status || err.message;
//         const prevErrors = errors;
//         const id = Date.now();
//         setErrors([...prevErrors, { id, messages, status }]);
//         setTimeout(() => {
//           const newErrors = (prevErrors: error[]) => prevErrors.filter((error) => error.id != id);
//           setErrors(newErrors);
//         }, 5000);
//       } else {
//         console.error("Unexpected error:", (err as Error).message);
//       }
//     } finally {
//       setLoading(false);
//       setIsEditing(false);
//     }
//   }