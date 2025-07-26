import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BlockConfig {
  id: string;
  type: string;
  props: Record<string, any>;
}

interface LayoutState {
  history: BlockConfig[][];
  pointer: number;
}

const initialState: LayoutState = {
  history: [[]],
  pointer: 0,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addBlock(state, action: PayloadAction<BlockConfig>) {
      const newLayout = [...state.history[state.pointer], action.payload];
      state.history = [...state.history.slice(0, state.pointer + 1), newLayout];
      state.pointer++;
    },
    removeBlock(state, action: PayloadAction<string>) {
      const newLayout = state.history[state.pointer].filter((b) => b.id !== action.payload);
      state.history = [...state.history.slice(0, state.pointer + 1), newLayout];
      state.pointer++;
    },
    moveBlock(state, action: PayloadAction<{ from: number; to: number }>) {
      const layout = [...state.history[state.pointer]];
      const [moved] = layout.splice(action.payload.from, 1);
      layout.splice(action.payload.to, 0, moved);
      state.history = [...state.history.slice(0, state.pointer + 1), layout];
      state.pointer++;
    },
    undo(state) {
      if (state.pointer > 0) state.pointer--;
    },
    redo(state) {
      if (state.pointer < state.history.length - 1) state.pointer++;
    },
    loadInitialLayout(state, action: PayloadAction<BlockConfig[]>) {
      state.history = [action.payload];
      state.pointer = 0;
    },
  },
});

export const { addBlock, removeBlock, moveBlock, undo, redo, loadInitialLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
