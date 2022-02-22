import Funcomp2 from './Funcomp2';
function Funcomp1() {
    let name = 'Kalyani Challapalli'
    return ( 
        <div>
            <h2>Funcomp1 passing propes to Funcomp2</h2>
            <Funcomp2 username ={name}></Funcomp2>
        </div>
     );
}

export default Funcomp1;