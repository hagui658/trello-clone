import React, { useReducer } from "react";
// import { AppContainer } from "./styles";
// import { Card } from "./Card";
// import { Column } from "./Column";
// import { AddNewItem } from "./AddNewItem";

// const App = () => {
//   return (
//     <AppContainer>
//       <Column text="TO DO">
//         <Card text="Generate app scaffold" />
//       </Column>
//       <Column text="In Progress">
//         <Card text="Learn Typescript" />
//       </Column>
//       <Column text="Done">
//         <Card text="Begin to use static typing" />
//       </Column>
//       <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
//     </AppContainer>
//   );
// };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

interface State {
  count: number;
}

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default App;
