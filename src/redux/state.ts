let state = {
    profilePage: {
        posts: [
            {message: "Hey, how are you?",  likesCount: 13},
            {message: "It's my first post",  likesCount: 11},
            {message: "Happy birthday!",  likesCount: 7},
            {message: "How to learn React JS?",  likesCount: 3}
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Alex"},
            {id: 2, name: "Ivan"},
            {id: 3, name: "Andrew"},
            {id: 4, name: "Alexandra"},
            {id: 5, name: "Marina"},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Bye"},
            {id: 4, message: "Bye-Bye"}
        ],
    }
}
export default state;