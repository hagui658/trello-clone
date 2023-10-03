import React, { createContext, useReducer, useContext } from "react";
import * as uuid from "uuid";
import { findItemIndexById } from "../src/utils/findItemIndexById";
import { moveItem } from "./moveItem";
import { DragItem } from "../.history/src/DragItem_20230925105008";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<Actioin>;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};

type Actioin =
  | {
      type: "ADD_LIST";
      payload: string;
    }
  | {
      type: "ADD_TASK";
      payload: { text: string; takeId: string };
    }
  | {
      type: "MOVE_LIST";
      payload: { dragIndex: number; hoverIndex: number };
    }
  | {
      type: "SET_DRAGGED_ITEM";
      playload: DragItem | undefined;
    };

const appStateReducer = (state: AppState, action: Actioin): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      // Reducer logic here...
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: uuid.v4(), text: action.payload, tasks: [] },
        ],
      };
    }
    case "ADD_TASK": {
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.takeId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: uuid.v4(),
        text: action.payload.text,
      });

      return {
        ...state,
      };
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return { ...state };
    }
    default: {
      return state;
    }
  }
};
