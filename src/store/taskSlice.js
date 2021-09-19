import { createSlice } from "@reduxjs/toolkit";

const initialValue = [{
    tittle:"mengerjakan exercise",
    complete:true
},
  {
    tittle:"mengerjakan assigment",
    complete: false
  }
]

export const todoSlice = createSlice({
    name : "task",
    initialState:{
        tasks: initialValue
    },

    reducers:{
        hapusTask : (state, action) => {
            state.tasks = state.tasks.filter((task) => task.index !== action.payload)
        },
        

        addTask : (state, action) => {
            const newTasks = {
            // task: userInput,
            // complete: false,
            ...action.payload,
            }
            state.tasks = [...state.tasks, newTasks]
            // setTodos([...todos, newItem])
            },
        doneTask : (state, action) => {
                const newTasks = {
                    ...action.payload,
                }
                state.tasks = [...state.tasks, newTasks]
                newTasks.completed = true;
            },

    }
})
export const {hapusTask, addTask, doneTask} = todoSlice.actions;

export default todoSlice.reducer