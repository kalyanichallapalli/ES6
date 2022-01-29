import React from 'react';

function MemoComp({name}) {
    console.log('Rendering Memo')
  return <div>
      <h2>This is the MemoFunctional component Created By {name} </h2>
  </div>;
}

export default React.memo(MemoComp);
