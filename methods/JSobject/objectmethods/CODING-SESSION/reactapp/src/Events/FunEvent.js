function FunEvent() {
       
    const shoot = (a) =>{
        alert(a)
    }
        
    return ( 
        <div>
            <h2>This is Functional event</h2>
            <button onClick={() => shoot('Goal') }>Take a Shot!</button>
        </div>
     );
}

export default FunEvent ;