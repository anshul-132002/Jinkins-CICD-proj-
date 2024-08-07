import React,{forwardRef} from "react";

 function User(props,ref) {
  return (
    <div className="App">
      <input type="text" ref={ref} />
    </div>
  );
}
export default forwardRef(User)