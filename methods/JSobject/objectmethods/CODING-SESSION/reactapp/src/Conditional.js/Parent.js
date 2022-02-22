
function Goal(props){

    const isGoal = props.isGoal;

    if(isGoal){
        return <MadeGoal></MadeGoal>;
    }
    return <MissedGoal></MissedGoal>;

}

Goal(isGoal =false)
export default Goal;