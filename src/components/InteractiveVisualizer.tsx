import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Plus, Trash2, ArrowRight } from 'lucide-react';

interface VisualizerProps {
  symbol: string;
}

export const InteractiveVisualizer: React.FC<VisualizerProps> = ({ symbol }) => {
  // Common states
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 1. Array States
  const [arr, setArr] = useState<number[]>([15, 42, 8, 91, 56]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTarget, setSearchTarget] = useState<string>('');
  const [comparisonCount, setComparisonCount] = useState<number>(0);

  // 2. String States
  const [strVal, setStrVal] = useState<string>('ROADMAP');
  const [strPointers, setStrPointers] = useState<{ left: number; right: number } | null>(null);
  const [strHistory, setStrHistory] = useState<string[]>([]);
  const [isStringReversing, setIsStringReversing] = useState(false);

  // 3. Linked List States
  const [list, setList] = useState<number[]>([10, 20, 30, 40]);

  // 4. Stack States
  const [stack, setStack] = useState<number[]>([50, 75, 100]);

  // 5. Queue States
  const [queue, setQueue] = useState<number[]>([100, 200, 300]);

  // 6. BST States
  const [bstRoot, setBstRoot] = useState<{ val: number; left?: any; right?: any }>({
    val: 50,
    left: { val: 30, left: { val: 20 }, right: { val: 40 } },
    right: { val: 70, left: { val: 60 }, right: { val: 80 } }
  });
  const [bstSearchPath, setBstSearchPath] = useState<number[]>([]);
  const [searchPathText, setSearchPathText] = useState<string>('');

  // 7. Graph state
  const [graphActiveNode, setGraphActiveNode] = useState<string | null>(null);
  const [graphVisited, setGraphVisited] = useState<string[]>([]);
  const [graphQueue, setGraphQueue] = useState<string[]>([]);

  const handleArrayInsert = () => {
    const val = parseInt(inputValue, 10);
    if (isNaN(val)) {
      setErrorMessage('Please enter a valid number');
      return;
    }
    setErrorMessage('');
    setArr((prev) => [...prev, val]);
    setInputValue('');
  };

  const handleArraySearch = () => {
    const target = parseInt(searchTarget, 10);
    if (isNaN(target)) {
      setErrorMessage('Please enter a search number');
      return;
    }
    setErrorMessage('');
    let steps = 0;
    let found = false;

    // Linear search simulation
    const runSearch = (idx: number) => {
      if (idx >= arr.length) {
        setActiveIndex(null);
        setComparisonCount(steps);
        if (!found) setErrorMessage('Element not found in array!');
        return;
      }

      setActiveIndex(idx);
      steps++;
      setComparisonCount(steps);

      if (arr[idx] === target) {
        found = true;
        return;
      }

      setTimeout(() => runSearch(idx + 1), 600);
    };

    runSearch(0);
  };

  // String Reversal Steps
  const triggerStringReverse = () => {
    if (isStringReversing) return;
    setIsStringReversing(true);
    let chars = strVal.split('');
    let l = 0;
    let r = chars.length - 1;

    const step = () => {
      if (l >= r) {
        setStrPointers(null);
        setIsStringReversing(false);
        return;
      }

      setStrPointers({ left: l, right: r });
      // swap
      const temp = chars[l];
      chars[l] = chars[r];
      chars[r] = temp;
      setStrVal(chars.join(''));

      l++;
      r--;

      setTimeout(step, 1000);
    };

    step();
  };

  // Stack Operations
  const handleStackPush = () => {
    const val = parseInt(inputValue, 10);
    if (isNaN(val)) {
      setErrorMessage('Enter a number to push');
      return;
    }
    setErrorMessage('');
    setStack((prev) => [...prev, val]);
    setInputValue('');
  };

  const handleStackPop = () => {
    if (stack.length === 0) {
      setErrorMessage('Stack Underflow!');
      return;
    }
    setErrorMessage('');
    setStack((prev) => prev.slice(0, -1));
  };

  // Queue Operations
  const handleQueueEnqueue = () => {
    const val = parseInt(inputValue, 10);
    if (isNaN(val)) {
      setErrorMessage('Enter a number to enqueue');
      return;
    }
    setErrorMessage('');
    setQueue((prev) => [...prev, val]);
    setInputValue('');
  };

  const handleQueueDequeue = () => {
    if (queue.length === 0) {
      setErrorMessage('Queue Underflow!');
      return;
    }
    setErrorMessage('');
    setQueue((prev) => prev.slice(1));
  };

  // Linked list Operations
  const handleListPrepend = () => {
    const val = parseInt(inputValue, 10);
    if (isNaN(val)) return;
    setList((prev) => [val, ...prev]);
    setInputValue('');
  };

  const handleListDeleteTail = () => {
    setList((prev) => prev.slice(0, -1));
  };

  // BST Operations
  const handleBstSearch = () => {
    const searchVal = parseInt(inputValue, 10);
    if (isNaN(searchVal)) {
      setErrorMessage('Enter value to find in BST');
      return;
    }
    setErrorMessage('');
    const path: number[] = [];
    let cur = bstRoot;

    const trace = (node: any) => {
      if (!node) {
        setBstSearchPath([...path]);
        setSearchPathText(`Value ${searchVal} is not in the tree.`);
        return;
      }

      path.push(node.val);
      setBstSearchPath([...path]);

      if (node.val === searchVal) {
        setSearchPathText(`Success! Found ${searchVal} with ${path.length} comparisons!`);
        return;
      }

      if (searchVal < node.val) {
        setSearchPathText(`Searching left of ${node.val} (since ${searchVal} < ${node.val})...`);
        setTimeout(() => trace(node.left), 1000);
      } else {
        setSearchPathText(`Searching right of ${node.val} (since ${searchVal} > ${node.val})...`);
        setTimeout(() => trace(node.right), 1000);
      }
    };

    trace(cur);
  };

  // Graph Traversal
  const triggerGraphBFS = () => {
    setGraphVisited([]);
    setGraphQueue(['A']);
    setGraphActiveNode('A');

    const adj: Record<string, string[]> = {
      A: ['B', 'C'],
      B: ['D', 'E'],
      C: ['F'],
      D: [],
      E: ['F'],
      F: []
    };

    const visited: string[] = [];
    const q: string[] = ['A'];

    const step = () => {
      if (q.length === 0) {
        setGraphActiveNode(null);
        return;
      }

      const cur = q.shift()!;
      setGraphActiveNode(cur);

      if (!visited.includes(cur)) {
        visited.push(cur);
        setGraphVisited([...visited]);

        // add unvisited neighbors
        const neighbors = adj[cur] || [];
        neighbors.forEach(n => {
          if (!visited.includes(n) && !q.includes(n)) {
            q.push(n);
          }
        });
        setGraphQueue([...q]);
      }

      setTimeout(step, 1200);
    };

    step();
  };

  return (
    <div className="p-5 mt-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-sm font-semibold tracking-wider uppercase text-blue-600 dark:text-cyan-400">
          Interactive Live Visualizer
        </h4>
        <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">
          Model: {symbol}
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
        Interact with this dynamic simulation to understand how internal values change. Enter data inputs to mutate the structures, or play step-by-step traces.
      </p>

      {/* RENDER DYNAMIC VISUALIZERS */}

      {symbol === 'array' && (
        <div>
          {/* ARRAY VIEW */}
          <div className="flex flex-wrap gap-2 justify-center py-6 min-h-[90px]">
            {arr.map((val, idx) => (
              <motion.div
                key={idx}
                id={`array-cell-${idx}`}
                layout
                className={`w-14 h-14 rounded-lg flex flex-col justify-center items-center font-mono font-bold text-sm border-2 transition-all duration-300 ${
                  activeIndex === idx
                    ? 'border-amber-500 bg-amber-500/20 text-amber-500 shadow-lg scale-105'
                    : 'border-blue-600/30 dark:border-cyan-400/30 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100'
                }`}
              >
                <div className="text-xs text-slate-400 dark:text-slate-500 font-normal">[{idx}]</div>
                <div>{val}</div>
              </motion.div>
            ))}
          </div>

          {/* CONTROLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="flex gap-2">
              <input
                id="array-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="New element..."
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden focus:border-blue-600 text-slate-800 dark:text-slate-100"
              />
              <button
                id="btn-array-add"
                onClick={handleArrayInsert}
                className="px-3 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-1 font-medium cursor-pointer"
              >
                <Plus size={14} /> Insert
              </button>
            </div>

            <div className="flex gap-2">
              <input
                id="array-search-input"
                type="text"
                value={searchTarget}
                onChange={(e) => setSearchTarget(e.target.value)}
                placeholder="Find value..."
                className="flex-1 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden focus:border-blue-600 text-slate-800 dark:text-slate-100"
              />
              <button
                id="btn-array-search"
                onClick={handleArraySearch}
                className="px-3 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white rounded-lg flex items-center gap-1 font-medium cursor-pointer"
              >
                <Play size={14} /> Run Search
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 text-xs text-slate-500 font-mono">
            <span>Comparisons made: {comparisonCount}</span>
            <button
              id="btn-array-reset"
              onClick={() => {
                setArr([15, 42, 8, 91, 56]);
                setActiveIndex(null);
                setComparisonCount(0);
                setErrorMessage('');
              }}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>
        </div>
      )}

      {symbol === 'string' && (
        <div>
          {/* STRING VIEW */}
          <div className="flex justify-center gap-1 py-6 min-h-[90px]">
            {strVal.split('').map((char, idx) => {
              const isLeft = strPointers?.left === idx;
              const isRight = strPointers?.right === idx;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <motion.div
                    layout
                    id={`string-char-${idx}`}
                    className={`w-11 h-11 rounded-md flex justify-center items-center font-mono font-bold text-base border ${
                      isLeft
                        ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                        : isRight
                        ? 'border-pink-500 bg-pink-500/20 text-pink-500'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100'
                    }`}
                  >
                    {char}
                  </motion.div>
                  <div className="text-[10px] font-mono h-4 mt-1">
                    {isLeft ? 'L' : isRight ? 'R' : ''}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex gap-2 justify-center">
            <input
              id="string-input"
              type="text"
              value={strVal}
              onChange={(e) => {
                if (!isStringReversing) {
                  setStrVal(e.target.value.toUpperCase().slice(0, 15));
                }
              }}
              disabled={isStringReversing}
              placeholder="ENTER WORDS"
              className="text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 text-center uppercase tracking-widest outline-hidden focus:border-pink-500 font-mono disabled:opacity-50 text-slate-800 dark:text-slate-100"
            />
            <button
              id="btn-string-reverse"
              onClick={triggerStringReverse}
              disabled={isStringReversing}
              className="px-4 py-2 text-xs bg-pink-600 hover:bg-pink-700 disabled:bg-pink-600/55 text-white rounded-lg flex items-center gap-1 font-medium cursor-pointer"
            >
              <ArrowRight size={14} /> Reverse Two-Pointer
            </button>
          </div>

          <p className="text-center text-[10px] text-slate-400 font-mono mt-3">
            Two pointers traverse inwards swapping characters back to back. Complexity: O(N) operations.
          </p>
        </div>
      )}

      {symbol === 'linkedlist' && (
        <div>
          {/* LINKED LIST VIEW */}
          <div className="flex items-center justify-center flex-wrap gap-2 py-6 min-h-[90px]">
            {list.map((val, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  id={`list-node-${idx}`}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex border border-slate-300 dark:border-slate-700 rounded-lg overflow-hidden font-mono text-xs text-center shadow-xs"
                >
                  <div className="bg-slate-200 dark:bg-slate-850 px-3 py-2 font-bold text-slate-700 dark:text-slate-300">
                    {val}
                  </div>
                  <div className="bg-blue-600/10 dark:bg-cyan-400/10 text-blue-600 dark:text-cyan-400 px-2 py-2 font-semibold flex items-center">
                    next ➔
                  </div>
                </motion.div>
                {idx < list.length - 1 && (
                  <ArrowRight size={16} className="text-slate-400 shrink-0" />
                )}
              </React.Fragment>
            ))}

            {list.length === 0 && (
              <span className="text-xs text-slate-400">Empty Head (NULL)</span>
            )}

            {list.length > 0 && (
              <>
                <ArrowRight size={16} className="text-slate-400" />
                <span className="text-xs font-mono px-3 py-2 border border-dashed rounded-lg text-slate-400">NULL</span>
              </>
            )}
          </div>

          <div className="flex gap-2 justify-center max-w-sm mx-auto">
            <input
              id="list-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Node data..."
              className="flex-1 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden"
            />
            <button
              id="btn-list-prepend"
              onClick={handleListPrepend}
              className="px-3 py-2 text-xs bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg cursor-pointer"
            >
              Prepend
            </button>
            <button
              id="btn-list-delete"
              onClick={handleListDeleteTail}
              className="px-3 py-2 text-xs bg-red-600 hover:bg-red-700 text-white rounded-lg cursor-pointer"
            >
              Delete Tail
            </button>
          </div>
        </div>
      )}

      {symbol === 'stack' && (
        <div>
          {/* STACK VIEW */}
          <div className="flex flex-col-reverse items-center justify-center p-4 border border-dashed border-slate-300 dark:border-slate-850 rounded-xl max-w-[200px] mx-auto bg-slate-50/50 dark:bg-slate-950/20">
            <AnimatePresence initial={false}>
              {stack.map((val, idx) => (
                <motion.div
                  key={idx}
                  id={`stack-item-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -50 }}
                  className={`w-36 py-2 my-1 rounded-lg text-center font-mono font-bold text-xs border border-amber-600/30 bg-amber-600/10 text-amber-500 shadow-xs relative ${
                    idx === stack.length - 1 ? 'ring-2 ring-amber-500 outline-hidden' : ''
                  }`}
                >
                  {val}
                  {idx === stack.length - 1 && (
                    <span className="absolute -right-10 top-1 text-[10px] font-semibold bg-amber-500 text-slate-900 px-1 rounded-sm">
                      TOP
                    </span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {stack.length === 0 && (
              <span className="text-xs text-slate-400 py-3 font-mono">Empty Stack</span>
            )}
          </div>

          <div className="flex gap-2 justify-center mt-4">
            <input
              id="stack-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Val..."
              className="w-20 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden text-slate-800 dark:text-slate-100"
            />
            <button
              id="btn-stack-push"
              onClick={handleStackPush}
              className="px-3 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium cursor-pointer"
            >
              Push (LIFO)
            </button>
            <button
              id="btn-stack-pop"
              onClick={handleStackPop}
              className="px-3 py-2 text-xs bg-slate-600 hover:bg-slate-700 dark:bg-slate-800 text-white rounded-lg cursor-pointer"
            >
              Pop
            </button>
          </div>
        </div>
      )}

      {symbol === 'queue' && (
        <div>
          {/* QUEUE VIEW */}
          <div className="flex items-center justify-start gap-1 p-4 border border-dashed border-slate-300 dark:border-slate-850 rounded-xl overflow-x-auto min-h-[90px] bg-slate-50/50 dark:bg-slate-950/20">
            <div className="text-slate-400 text-[10px] font-mono select-none px-2 shrink-0">
              ➔ OUT (Front)
            </div>

            <AnimatePresence initial={false}>
              {queue.map((val, idx) => (
                <motion.div
                  key={idx}
                  id={`queue-item-${idx}`}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`w-16 py-3 rounded-lg text-center font-mono font-bold text-xs border border-green-600/30 bg-green-600/10 text-green-500 shrink-0 relative ${
                    idx === 0 ? 'ring-2 ring-green-600' : ''
                  }`}
                >
                  {val}
                  {idx === 0 && (
                    <span className="absolute left-1/2 -top-4 -translate-x-1/2 text-[8px] tracking-wider text-green-600 font-bold uppercase">
                      Front
                    </span>
                  )}
                  {idx === queue.length - 1 && (
                    <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 text-[8px] tracking-wider text-teal-500 font-bold uppercase">
                      Rear
                    </span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {queue.length === 0 && (
              <span className="text-xs text-slate-400 py-3 mx-auto font-mono">Empty Queue</span>
            )}

            <div className="text-slate-400 text-[10px] font-mono select-none px-2 shrink-0">
              IN ➔
            </div>
          </div>

          <div className="flex gap-2 justify-center mt-4">
            <input
              id="queue-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Val..."
              className="w-20 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden text-slate-800 dark:text-slate-100"
            />
            <button
              id="btn-queue-enqueue"
              onClick={handleQueueEnqueue}
              className="px-3 py-2 text-xs bg-green-600 hover:bg-green-700 text-white rounded-lg cursor-pointer"
            >
              Enqueue (FIFO)
            </button>
            <button
              id="btn-queue-dequeue"
              onClick={handleQueueDequeue}
              className="px-3 py-2 text-xs bg-slate-600 hover:bg-slate-700 dark:bg-slate-800 text-white rounded-lg cursor-pointer"
            >
              Dequeue
            </button>
          </div>
        </div>
      )}

      {symbol === 'bst' || symbol === 'tree' ? (
        <div>
          {/* BINARY TREE DIAGRAM */}
          <div className="relative py-6 max-w-sm mx-auto text-center">
            {/* Simple representation */}
            <div className="flex flex-col items-center gap-4">
              {/* Level 1 */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full font-mono text-xs font-bold border-2 transition-colors duration-500 ${
                  bstSearchPath.includes(50) ? 'border-amber-500 bg-amber-500/20 text-amber-500' : 'border-slate-400 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100'
                }`}
              >
                50 (Root)
              </div>

              {/* Lines and Level 2 */}
              <div className="flex justify-between w-full max-w-[280px]">
                <div className="flex flex-col items-center">
                  <div className="text-[10px] text-slate-400 mb-1">◀ L (30)</div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-mono text-xs border-2 transition-all duration-500 ${
                      bstSearchPath.includes(30) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800 bg-slate-150 dark:bg-slate-850'
                    }`}
                  >
                    30
                  </div>
                  {/* Level 3 Left */}
                  <div className="flex justify-between w-24 mt-2">
                    <div
                      className={`w-7 h-7 flex items-center justify-center rounded-full font-mono text-[10px] border transition-colors ${
                        bstSearchPath.includes(20) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800'
                      }`}
                    >
                      20
                    </div>
                    <div
                      className={`w-7 h-7 flex items-center justify-center rounded-full font-mono text-[10px] border transition-colors ${
                        bstSearchPath.includes(40) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800'
                      }`}
                    >
                      40
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-[10px] text-slate-400 mb-1">(70) R ▶</div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-mono text-xs border-2 transition-all duration-500 ${
                      bstSearchPath.includes(70) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800'
                    }`}
                  >
                    70
                  </div>
                  {/* Level 3 Right */}
                  <div className="flex justify-between w-24 mt-2">
                    <div
                      className={`w-7 h-7 flex items-center justify-center rounded-full font-mono text-[10px] border transition-colors ${
                        bstSearchPath.includes(60) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800'
                      }`}
                    >
                      60
                    </div>
                    <div
                      className={`w-7 h-7 flex items-center justify-center rounded-full font-mono text-[10px] border transition-colors ${
                        bstSearchPath.includes(80) ? 'border-amber-500 bg-amber-500/10 text-amber-500' : 'border-slate-400 dark:border-slate-800'
                      }`}
                    >
                      80
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center max-w-sm mx-auto">
            <input
              id="bst-search-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="e.g., 60, 20, 80"
              className="flex-1 text-xs px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-850 border border-slate-300 dark:border-slate-700 focus:outline-hidden text-slate-800 dark:text-slate-100"
            />
            <button
              id="btn-bst-search"
              onClick={handleBstSearch}
              className="px-3 py-2 text-xs bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium cursor-pointer"
            >
              Binary BST Search
            </button>
          </div>

          {searchPathText && (
            <p className="text-center text-xs text-amber-500 font-mono mt-3 animate-pulse bg-amber-500/5 py-1.5 rounded-md">
              {searchPathText}
            </p>
          )}
        </div>
      ) : null}

      {symbol === 'graph' && (
        <div>
          {/* GRAPH TRAVERSAL */}
          <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto py-5 justify-center relative">
            {/* Simple layout:
                A -> B, C
                B -> D, E
                C -> F
            */}
            {['A', 'B', 'C', 'D', 'E', 'F'].map((node) => {
              const isActive = graphActiveNode === node;
              const isVisited = graphVisited.includes(node);
              return (
                <div
                  key={node}
                  id={`graph-vertex-${node}`}
                  className={`w-12 h-12 flex flex-col justify-center items-center rounded-full border-2 font-mono text-sm font-extrabold mx-auto transition-colors duration-700 ${
                    isActive
                      ? 'border-yellow-500 bg-yellow-500/30 text-yellow-500 scale-110 shadow-lg'
                      : isVisited
                      ? 'border-green-500 bg-green-500/20 text-green-500'
                      : 'border-slate-400 dark:border-slate-800 bg-slate-100 dark:bg-slate-800'
                  }`}
                >
                  {node}
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              id="btn-graph-bfs"
              onClick={triggerGraphBFS}
              className="px-4 py-2 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium cursor-pointer flex items-center gap-1.5"
            >
              🚀 Simulate BFS Layer Traversal
            </button>

            <div className="flex flex-col gap-1 w-full text-xs font-mono text-slate-500 mt-2 bg-slate-100/50 dark:bg-slate-850/40 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <div>Queue: [ {graphQueue.join(', ')} ]</div>
              <div>Visited Path: [ {graphVisited.join(' -> ')} ]</div>
            </div>
          </div>
        </div>
      )}

      {errorMessage && (
        <div id="visualizer-error-msg" className="p-2.5 mt-2.5 rounded-lg font-mono text-[10px] font-semibold text-red-500 border border-red-500/10 bg-red-500/5 text-center">
          ✖ {errorMessage}
        </div>
      )}
    </div>
  );
};
