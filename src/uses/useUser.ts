import { reactive } from "vue"

type StateUser = {
    users: any[] | null
}

export const useUser = () => {

    const state = reactive<StateUser>({
        users: null
    })

    const getUsers = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        state.users = await data.json()
    }

    return {
        state,
        getUsers,
    }
}