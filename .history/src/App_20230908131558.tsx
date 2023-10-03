import React, { useReducer } from "react";
import { AppContainer } from "./styles";
import { Card } from "./Card";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

const App = () => {
  return (
    <AppContainer>
      <Column text="TO DO">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};

export default App;
