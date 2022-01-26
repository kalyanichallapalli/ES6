import F2 from "./F2";
function F1() {
    let lastname = 'Challapalli'

    return <div>
        This is the Functional Compomnent 1 Created by {lastname}
        <F2 username = {lastname}></F2>
    </div>
    
}
export default F1;