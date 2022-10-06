let init = {

}
function Reducer(state = init, action) {
    const { type, payload } = action;
    switch (type) {
        case "hi":
            console.log("hi")
            return;
        case "bye":
            console.log("bye")
            return;
        default:
            return state;
    }
}

export default Reducer