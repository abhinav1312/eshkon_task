// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { useSDK } from '@contentful/react-apps-toolkit';
// // // // import type { PageAppSDK } from '@contentful/app-sdk';

// // // // type BlockType = 'hero' | 'two-column' | 'image-grid';

// // // // interface LayoutConfig {
// // // //   blocks: { id: string; type: BlockType }[];
// // // // }

// // // // export default function LayoutBuilder() {
// // // //   const sdk = useSDK<PageAppSDK>();
// // // //   const field = sdk.field;
// // // //   const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({ blocks: [] });

// // // //   useEffect(() => {
// // // //     sdk.window.startAutoResizer(1000);
// // // //     const value = field.getValue();
// // // //     if (value) setLayoutConfig(value);
// // // //   }, []);

// // // //   const save = async () => {
// // // //     await field.setValue(layoutConfig);
// // // //     sdk.notifier.success('Layout saved!');
// // // //   };

// // // //   const addBlock = (type: BlockType) => {
// // // //     const newBlock = { id: Date.now().toString(), type };
// // // //     setLayoutConfig((prev) => {
// // // //   const currentBlocks = Array.isArray(prev?.blocks) ? prev.blocks : [];
// // // //   return {
// // // //     blocks: [...currentBlocks, newBlock],
// // // //   };
// // // // });

// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
// // // //       <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Layout Builder</h1>
// // // //       <div style={{ margin: '1rem 0' }}>
// // // //         <button onClick={() => addBlock('hero')} style={btn}>+ Hero</button>
// // // //         <button onClick={() => addBlock('two-column')} style={btn}>+ Two Column</button>
// // // //         <button onClick={() => addBlock('image-grid')} style={btn}>+ Image Grid</button>
// // // //         <button onClick={save} style={{ ...btn, background: '#4CAF50' }}>💾 Save</button>
// // // //       </div>
// // // //       <div style={{ display: 'grid', gap: '1rem' }}>
// // // //         {layoutConfig.blocks?.map((block) => (
// // // //           <div key={block.id} style={{
// // // //             border: '1px solid #ccc',
// // // //             padding: '1rem',
// // // //             borderRadius: '4px',
// // // //             background: '#f9f9f9',
// // // //           }}>
// // // //             <strong>{block.type}</strong>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // const btn: React.CSSProperties = {
// // // //   marginRight: '0.5rem',
// // // //   padding: '0.5rem 1rem',
// // // //   backgroundColor: '#0070f3',
// // // //   color: 'white',
// // // //   border: 'none',
// // // //   borderRadius: '4px',
// // // //   cursor: 'pointer',
// // // // };


// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import { useSDK } from '@contentful/react-apps-toolkit';
// // // import type { PageAppSDK } from '@contentful/app-sdk';

// // // type BlockType = 'hero' | 'two-column' | 'image-grid';

// // // interface Block {
// // //   id: string;
// // //   type: BlockType;
// // // }

// // // interface LayoutConfig {
// // //   blocks: Block[];
// // // }

// // // export default function LayoutBuilder() {
// // //   const sdk = useSDK<PageAppSDK>();
// // //   const field = sdk.field;
// // //   const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({ blocks: [] });

// // //   const [history, setHistory] = useState<LayoutConfig[]>([]);
// // //   const [pointer, setPointer] = useState(-1);

// // //   useEffect(() => {
// // //     sdk.window.startAutoResizer();
// // //     const initialValue = field.getValue();
// // //     if (initialValue && Array.isArray(initialValue.blocks)) {
// // //       setLayoutConfig(initialValue);
// // //       setHistory([initialValue]);
// // //       setPointer(0);
// // //     }
// // //   }, []);

// // //   const updateConfig = (newConfig: LayoutConfig) => {
// // //     const newHistory = [...history.slice(0, pointer + 1), newConfig];
// // //     setHistory(newHistory);
// // //     setPointer(newHistory.length - 1);
// // //     setLayoutConfig(newConfig);
// // //   };

// // //   const addBlock = (type: BlockType) => {
// // //     const newBlock: Block = {
// // //       id: Date.now().toString(),
// // //       type,
// // //     };
// // //     const newConfig = {
// // //       blocks: [...layoutConfig.blocks, newBlock],
// // //     };
// // //     updateConfig(newConfig);
// // //   };

// // //   const undo = () => {
// // //     if (pointer > 0) {
// // //       const newPointer = pointer - 1;
// // //       setPointer(newPointer);
// // //       setLayoutConfig(history[newPointer]);
// // //     }
// // //   };

// // //   const redo = () => {
// // //     if (pointer < history.length - 1) {
// // //       const newPointer = pointer + 1;
// // //       setPointer(newPointer);
// // //       setLayoutConfig(history[newPointer]);
// // //     }
// // //   };

// // //   const save = async () => {
// // //     await field.setValue(layoutConfig);
// // //     sdk.notifier.success('Layout saved!');
// // //   };

// // //   return (
// // //     <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
// // //       <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Layout Builder</h1>

// // //       <div style={{ margin: '1rem 0' }}>
// // //         <button onClick={() => addBlock('hero')} style={btn}>+ Hero</button>
// // //         <button onClick={() => addBlock('two-column')} style={btn}>+ Two Column</button>
// // //         <button onClick={() => addBlock('image-grid')} style={btn}>+ Image Grid</button>
// // //         <button onClick={undo} disabled={pointer <= 0} style={btn}>↩ Undo</button>
// // //         <button onClick={redo} disabled={pointer >= history.length - 1} style={btn}>↪ Redo</button>
// // //         <button onClick={save} style={{ ...btn, backgroundColor: '#4CAF50' }}>💾 Save</button>
// // //       </div>

// // //       <div style={{ display: 'grid', gap: '1rem' }}>
// // //         {layoutConfig.blocks?.map((block) => (
// // //           <div
// // //             key={block.id}
// // //             style={{
// // //               border: '1px solid #ccc',
// // //               padding: '1rem',
// // //               borderRadius: '4px',
// // //               backgroundColor: '#f9f9f9',
// // //             }}
// // //           >
// // //             <strong>{block.type}</strong>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // const btn: React.CSSProperties = {
// // //   marginRight: '0.5rem',
// // //   padding: '0.5rem 1rem',
// // //   backgroundColor: '#0070f3',
// // //   color: 'white',
// // //   border: 'none',
// // //   borderRadius: '4px',
// // //   cursor: 'pointer',
// // // };


// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { useSDK } from '@contentful/react-apps-toolkit';
// // import type { PageAppSDK } from '@contentful/app-sdk';

// // type BlockType = 'hero' | 'two-column' | 'image-grid';

// // interface Block {
// //   id: string;
// //   type: BlockType;
// // }

// // interface LayoutConfig {
// //   blocks: Block[];
// // }

// // export default function LayoutBuilder() {
// //   const sdk = useSDK<PageAppSDK>();
// //   const field = sdk.field;
// //   const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({ blocks: [] });

// //   const [history, setHistory] = useState<LayoutConfig[]>([]);
// //   const [pointer, setPointer] = useState(-1);

// //   useEffect(() => {
// //     sdk.window.startAutoResizer();
// //     const initialValue = field.getValue();
// //     if (initialValue && Array.isArray(initialValue.blocks)) {
// //       setLayoutConfig(initialValue);
// //       setHistory([initialValue]);
// //       setPointer(0);
// //     }
// //   }, []);

// //   const updateConfig = (newConfig: LayoutConfig) => {
// //     const newHistory = [...history.slice(0, pointer + 1), newConfig];
// //     setHistory(newHistory);
// //     setPointer(newHistory.length - 1);
// //     setLayoutConfig(newConfig);
// //   };

// //   const addBlock = (type: BlockType) => {
// //     const newBlock: Block = {
// //       id: Date.now().toString(),
// //       type,
// //     };
// //     updateConfig({
// //       blocks: [...layoutConfig.blocks, newBlock],
// //     });
// //   };

// //   const deleteBlock = (id: string) => {
// //     const updated = {
// //       blocks: layoutConfig.blocks.filter((block) => block.id !== id),
// //     };
// //     updateConfig(updated);
// //   };

// //   const undo = () => {
// //     if (pointer > 0) {
// //       const newPointer = pointer - 1;
// //       setPointer(newPointer);
// //       setLayoutConfig(history[newPointer]);
// //     }
// //   };

// //   const redo = () => {
// //     if (pointer < history.length - 1) {
// //       const newPointer = pointer + 1;
// //       setPointer(newPointer);
// //       setLayoutConfig(history[newPointer]);
// //     }
// //   };

// //   const save = async () => {
// //     await field.setValue(layoutConfig);
// //     sdk.notifier.success('Layout saved!');
// //   };

// //   return (
// //     <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
// //       <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Layout Builder</h1>

// //       <div style={{ margin: '1rem 0' }}>
// //         <button onClick={() => addBlock('hero')} style={btn}>+ Hero</button>
// //         <button onClick={() => addBlock('two-column')} style={btn}>+ Two Column</button>
// //         <button onClick={() => addBlock('image-grid')} style={btn}>+ Image Grid</button>
// //         <button onClick={undo} disabled={pointer <= 0} style={btn}>↩ Undo</button>
// //         <button onClick={redo} disabled={pointer >= history.length - 1} style={btn}>↪ Redo</button>
// //         <button onClick={save} style={{ ...btn, backgroundColor: '#4CAF50' }}>💾 Save</button>
// //       </div>

// //       <div style={{ display: 'grid', gap: '1rem' }}>
// //         {layoutConfig.blocks?.map((block) => (
// //           <div
// //             key={block.id}
// //             style={{
// //               border: '1px solid #ccc',
// //               padding: '1rem',
// //               borderRadius: '4px',
// //               backgroundColor: '#f9f9f9',
// //               display: 'flex',
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //             }}
// //           >
// //             <strong>{block.type}</strong>
// //             <button
// //               onClick={() => deleteBlock(block.id)}
// //               style={{
// //                 marginLeft: '1rem',
// //                 backgroundColor: '#f44336',
// //                 color: 'white',
// //                 border: 'none',
// //                 borderRadius: '4px',
// //                 padding: '0.3rem 0.6rem',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               🗑 Delete
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // const btn: React.CSSProperties = {
// //   marginRight: '0.5rem',
// //   padding: '0.5rem 1rem',
// //   backgroundColor: '#0070f3',
// //   color: 'white',
// //   border: 'none',
// //   borderRadius: '4px',
// //   cursor: 'pointer',
// // };



// 'use client';

// import { useEffect, useState } from 'react';
// import { useSDK } from '@contentful/react-apps-toolkit';
// import type { PageAppSDK } from '@contentful/app-sdk';

// import {
//   DndContext,
//   closestCenter,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from '@dnd-kit/core';
// import {
//   SortableContext,
//   arrayMove,
//   useSortable,
//   verticalListSortingStrategy,
// } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// type BlockType = 'hero' | 'two-column' | 'image-grid';

// interface LayoutBlock {
//   id: string;
//   type: BlockType;
//   entryId: string;
// }

// interface LayoutConfig {
//   blocks: LayoutBlock[];
// }

// export default function LayoutBuilder() {
//   const sdk = useSDK<PageAppSDK>();
//   const field = sdk.field;
//   const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({ blocks: [] });

//   const [history, setHistory] = useState<LayoutConfig[]>([]);
//   const [pointer, setPointer] = useState(-1);

//   useEffect(() => {
//     sdk.window.startAutoResizer();
//     const initial = field.getValue();
//     if (initial && Array.isArray(initial.blocks)) {
//       setLayoutConfig(initial);
//       setHistory([initial]);
//       setPointer(0);
//     }
//   }, []);

//   const updateConfig = (newConfig: LayoutConfig) => {
//     const newHistory = [...history.slice(0, pointer + 1), newConfig];
//     setHistory(newHistory);
//     setPointer(newHistory.length - 1);
//     setLayoutConfig(newConfig);
//   };

//   const addBlock = (type: BlockType) => {
//     const newBlock: Block = {
//       id: Date.now().toString(),
//       type,
//     };
//     updateConfig({ blocks: [...layoutConfig.blocks, newBlock] });
//   };

//   const deleteBlock = (id: string) => {
//     updateConfig({ blocks: layoutConfig.blocks.filter((b) => b.id !== id) });
//   };

//   const undo = () => {
//     if (pointer > 0) {
//       setPointer(pointer - 1);
//       setLayoutConfig(history[pointer - 1]);
//     }
//   };

//   const redo = () => {
//     if (pointer < history.length - 1) {
//       setPointer(pointer + 1);
//       setLayoutConfig(history[pointer + 1]);
//     }
//   };

//   const save = async () => {
//     await field.setValue(layoutConfig);
//     sdk.notifier.success('Layout saved!');
//   };

//   const sensors = useSensors(useSensor(PointerSensor));

//   const handleDragEnd = (event: any) => {
//     const { active, over } = event;
//     if (active.id !== over?.id) {
//       const oldIndex = layoutConfig.blocks.findIndex((b) => b.id === active.id);
//       const newIndex = layoutConfig.blocks.findIndex((b) => b.id === over?.id);
//       const newBlocks = arrayMove(layoutConfig.blocks, oldIndex, newIndex);
//       updateConfig({ blocks: newBlocks });
//     }
//   };

//   return (
//     <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
//       <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Layout Builder</h1>

//       <div style={{ margin: '1rem 0' }}>
//         <button onClick={() => addBlock('hero')} style={btn}>+ Hero</button>
//         <button onClick={() => addBlock('two-column')} style={btn}>+ Two Column</button>
//         <button onClick={() => addBlock('image-grid')} style={btn}>+ Image Grid</button>
//         <button onClick={undo} disabled={pointer <= 0} style={btn}>↩ Undo</button>
//         <button onClick={redo} disabled={pointer >= history.length - 1} style={btn}>↪ Redo</button>
//         <button onClick={save} style={{ ...btn, backgroundColor: '#4CAF50' }}>💾 Save</button>
//       </div>

//       <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <SortableContext items={layoutConfig.blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
//           <div style={{ display: 'grid', gap: '1rem' }}>
//             {layoutConfig.blocks.map((block) => (
//               <SortableBlock key={block.id} block={block} onDelete={deleteBlock} />
//             ))}
//           </div>
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// }

// function SortableBlock({ block, onDelete }: { block: Block; onDelete: (id: string) => void }) {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });

//   const style: React.CSSProperties = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     border: '1px solid #ccc',
//     padding: '1rem',
//     borderRadius: '4px',
//     backgroundColor: '#f9f9f9',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       <strong>{block.type}</strong>
//       <button
//         onClick={() => onDelete(block.id)}
//         style={{
//           marginLeft: '1rem',
//           backgroundColor: '#f44336',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           padding: '0.3rem 0.6rem',
//           cursor: 'pointer',
//         }}
//       >
//         🗑 Delete
//       </button>
//     </div>
//   );
// }

// const btn: React.CSSProperties = {
//   marginRight: '0.5rem',
//   padding: '0.5rem 1rem',
//   backgroundColor: '#0070f3',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   cursor: 'pointer',
// };
'use client';

import { useEffect, useState } from 'react';
import { useSDK } from '@contentful/react-apps-toolkit';
import type { PageAppSDK } from '@contentful/app-sdk';

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const typeToContentTypeId = {
  hero: 'heroBlock',
  'two-column': 'twoColumnRow',
  'image-grid': 'imageGrid',
};
type BlockType = 'hero' | 'two-column' | 'image-grid';

interface LayoutBlock {
  id: string;
  type: BlockType;
  entryId: string;
}

interface LayoutConfig {
  blocks: LayoutBlock[];
}

export default function LayoutBuilder() {
  const sdk = useSDK<PageAppSDK>();
  const field = (sdk as any)?.field;
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({ blocks: [] });

  const [history, setHistory] = useState<LayoutConfig[]>([]);
  const [pointer, setPointer] = useState(-1);

  useEffect(() => {
    (sdk as any)?.window.startAutoResizer();
    const initial = field.getValue();
    if (initial && Array.isArray(initial.blocks)) {
      setLayoutConfig(initial);
      setHistory([initial]);
      setPointer(0);
    }
  }, [field, (sdk as any)?.window]);

  const updateConfig = (newConfig: LayoutConfig) => {
    setLayoutConfig(newConfig);
    setHistory((prev) => [...prev.slice(0, pointer + 1), newConfig]);
    setPointer((prev) => prev + 1);
  };

  const addBlock = async (type: BlockType) => {
    const entry = await sdk.dialogs.selectSingleEntry({
      contentTypes: [typeToContentTypeId[type]],
    });

    if (!entry) return;

    const newBlock: LayoutBlock = {
      id: `${type}-${Date.now()}`, // Unique ID
      type,
      entryId: (entry as any)?.sys.id,
    };

    updateConfig({ blocks: [...layoutConfig.blocks, newBlock] });
  };

  const deleteBlock = (id: string) => {
    const updatedBlocks = layoutConfig.blocks.filter((b) => b.id !== id);
    const newConfig = { blocks: updatedBlocks };
    console.log('Deleting block:', id, 'New config:', newConfig);
    updateConfig(newConfig);
    (sdk as any)?.window.updateHeight();
  };

  const undo = () => {
    if (pointer > 0) {
      setPointer(pointer - 1);
      setLayoutConfig(history[pointer - 1]);
    }
  };

  const redo = () => {
    if (pointer < history.length - 1) {
      setPointer(pointer + 1);
      setLayoutConfig(history[pointer + 1]);
    }
  };

  const save = async () => {
    await field.setValue(layoutConfig);
    sdk.notifier.success('Layout saved!');
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = layoutConfig.blocks.findIndex((b) => b.id === active.id);
      const newIndex = layoutConfig.blocks.findIndex((b) => b.id === over?.id);
      const newBlocks = arrayMove(layoutConfig.blocks, oldIndex, newIndex);
      updateConfig({ blocks: newBlocks });
    }
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Layout Builder</h1>

      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => addBlock('hero')} style={btn}>+ Hero</button>
        <button onClick={() => addBlock('two-column')} style={btn}>+ Two Column</button>
        <button onClick={() => addBlock('image-grid')} style={btn}>+ Image Grid</button>
        <button onClick={undo} disabled={pointer <= 0} style={btn}>↩ Undo</button>
        <button onClick={redo} disabled={pointer >= history.length - 1} style={btn}>↪ Redo</button>
        <button onClick={save} style={{ ...btn, backgroundColor: '#4CAF50' }}>💾 Save</button>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={layoutConfig.blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {layoutConfig.blocks.map((block) => (
              <SortableBlock key={block.id} block={block} onDelete={deleteBlock} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}

// function SortableBlock({ block, onDelete }: { block: LayoutBlock; onDelete: (id: string) => void }) {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: block.id });

//   const style: React.CSSProperties = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     border: '1px solid #ccc',
//     padding: '1rem',
//     borderRadius: '4px',
//     backgroundColor: '#f9f9f9',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       <div>
//         <strong>{block.type}</strong>
//         <div style={{ fontSize: '0.8rem', color: '#666' }}>Entry ID: {block.entryId}</div>
//       </div>
//       <button
//         onClick={() => onDelete(block.id)}
//         style={{
//           marginLeft: '1rem',
//           backgroundColor: '#f44336',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           padding: '0.3rem 0.6rem',
//           cursor: 'pointer',
//         }}
//       >
//         🗑 Delete
//       </button>
//     </div>
//   );
// }


function SortableBlock({ block, onDelete }: { block: LayoutBlock; onDelete: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent conflict with drag listeners
    e.preventDefault();  // Ensure clean action
    console.log("DELETE BLOCK ID", block.id);
    onDelete(block.id);
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div {...attributes} {...listeners} style={{ flexGrow: 1 }}>
        <strong>{block.type}</strong>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>Entry ID: {block.entryId}</div>
      </div>
      <button
        onClick={handleDeleteClick}
        style={{
          marginLeft: '1rem',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '0.3rem 0.6rem',
          cursor: 'pointer',
        }}
      >
        🗑 Delete
      </button>
    </div>
  );
}




const btn: React.CSSProperties = {
  marginRight: '0.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#0070f3',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
