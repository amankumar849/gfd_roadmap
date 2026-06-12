import { TopicNode } from '../types';

export const dsaData: TopicNode[] = [
  // Beginner Level
  {
    id: 'dsa-arrays',
    title: 'Arrays',
    description: 'A fundamental contiguous collection of elements of homogeneous types. Learn indexing, lookup complexity, memory structures, dynamic arrays, and basic problems like two-sum or sub-array products.',
    durationEstimate: '4 days',
    category: 'Beginner',
    interactiveDataSymbol: 'array',
    visualExplanationSteps: [
      'An array holds elements in successive contiguous memory blocks.',
      'Accessing an element via index (e.g., arr[3]) takes constant O(1) time because the memory address is calculated instantly: Base_Address + Index * Size_of_Element.',
      'Inserting an element at the beginning requires shifting all other elements right, taking linear O(N) time.',
      'Deleting an element also requires shifting elements left to maintain contiguity, taking O(N) time.'
    ],
    resources: [
      { id: 'arr-r1', name: 'Array Data Structure Guide - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/array-data-structure/', type: 'docs' },
      { id: 'arr-r2', name: 'LeetCode Explore: Arrays 101', url: 'https://leetcode.com/explore/learn/card/fun-with-arrays/', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'arr-q1', text: 'Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/two-sum/', solutionHint: 'Use a Hash Map to store the complement (target - current_value) and its index during traversal. This reduces complexity from O(N^2) to O(N).' },
      { id: 'arr-q2', text: 'Merge Sorted Array: Merge two sorted integer arrays into one unified sorted array.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/merge-sorted-array/' },
      { id: 'arr-q3', text: 'Maximum Subarray (Kadane\'s Algorithm): Find the contiguous subarray which has the largest sum.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/maximum-subarray/' }
    ]
  },
  {
    id: 'dsa-strings',
    title: 'Strings',
    description: 'Arrays of character elements. Learn string representations, immutability concepts in languages like Java/JS, substring search, two-pointer scanning, sliding window algorithms, and pattern matching.',
    durationEstimate: '3 days',
    category: 'Beginner',
    interactiveDataSymbol: 'string',
    visualExplanationSteps: [
      'Strings are arrays of characters under the hood. In many languages, they are immutable.',
      'Reverse operation: Use two pointers at the start and end of the string, swap characters, increment start, and decrement end until they meet.',
      'Sliding Window: Expand a right pointer, accumulate character counts, contract a left pointer when constraints fail. O(N) linear scan!'
    ],
    resources: [
      { id: 'str-r1', name: 'Algorithms on Strings - Stanford Coursera', url: 'https://www.coursera.org/learn/algorithms-on-strings', type: 'course' }
    ],
    practiceQuestions: [
      { id: 'str-q1', text: 'Valid Palindrome: Check if a phrase is a palindrome, ignoring non-alphanumeric characters.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/', solutionHint: 'Use two pointers starting at opposite boundaries. Skip non-alphanumeric elements, then compare case-insensitively.' },
      { id: 'str-q2', text: 'Longest Substring Without Repeating Characters: Find length of longest unique substring.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' }
    ]
  },
  {
    id: 'dsa-linked-lists',
    title: 'Linked Lists',
    description: 'A non-contiguous collection of nodes where each node coordinates a data cell and a reference pointer pointing to the next node in the line.',
    durationEstimate: '5 days',
    category: 'Beginner',
    interactiveDataSymbol: 'linkedlist',
    visualExplanationSteps: [
      'Unlike arrays, linked lists can reside non-contiguously in memory.',
      'Each node contains a data property and a "next" pointer referencing the succeeding node.',
      'Insertion at the head is extremely fast! O(1) constant time: create new node, set its next to current head, point head to new node.',
      'Traversals and search require traversing nodes sequentially from root, taking linear O(N) time.'
    ],
    resources: [
      { id: 'll-r1', name: 'Linked Lists Visual Guide - VisuAlgo', url: 'https://visualgo.net/en/list', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'll-q1', text: 'Reverse a Linked List: Reverse a singly linked list iteratively and recursively.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/', solutionHint: 'Iterate keeping three pointers: previous, current, and next. In each step, set current.next = previous, then slide previous and current forward.' },
      { id: 'll-q2', text: 'Linked List Cycle Detection: Determine if a linked list hosts a loop.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/' }
    ]
  },
  {
    id: 'dsa-stack',
    title: 'Stack',
    description: 'A linear data structure enforcing the Last-In, First-Out (LIFO) protocol. Key operations are Push (add to top), Pop (remove from top), and Peek.',
    durationEstimate: '3 days',
    category: 'Beginner',
    interactiveDataSymbol: 'stack',
    visualExplanationSteps: [
      'A stack resembles a pile of plates. The last plate placed on top is always the first one washed.',
      'Operating rules: elements enter and exit from only the top boundary (LIFO).',
      'Push adds an element to the top of the stack. Time complexity is O(1).',
      'Pop extracts the top element. Time complexity is O(1).',
      'Extremely useful for parenthesis matching, recursion stack tracking, and back-history tracking in browsers.'
    ],
    resources: [
      { id: 'st-r1', name: 'Stacks Explained - freeCodeCamp Video', url: 'https://www.freecodecamp.org', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'st-q1', text: 'Valid Parentheses: Determine if brackets like "()[]{}" in a string close in the correct nested order.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/', solutionHint: 'For every opening bracket, push it to a stack. For every closing bracket, pop the top of the stack and check if they match. If mismatch or empty, return false.' }
    ]
  },
  {
    id: 'dsa-queue',
    title: 'Queue',
    description: 'A linear structure enforcing the First-In, First-Out (FIFO) protocol. Elements enter at the rear (Enqueue) and exit from the front (Dequeue).',
    durationEstimate: '3 days',
    category: 'Beginner',
    interactiveDataSymbol: 'queue',
    visualExplanationSteps: [
      'A queue resembles a line of buyers. The person joining first receives service first.',
      'Enqueue adds an element to the back/rear. Complexity is O(1).',
      'Dequeue removes an element from the front. Complexity is O(1).',
      'Circular systems can reuse depleted slots to optimize cell storage.',
      'Critical for CPU task scheduling, printer queues, and Breadth-First Searches (BFS).'
    ],
    resources: [
      { id: 'qu-r1', name: 'Queues and Double-Ended Queues - VisuAlgo', url: 'https://visualgo.net/en/list?slide=6', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'qu-q1', text: 'Implement Queue using Stacks: Design a FIFO queue using only two standard LIFO stacks.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/implement-queue-using-stacks/', solutionHint: 'Use an input stack and output stack. On enqueue, push to input. On dequeue, if output is empty, transfer all elements from input to output, then pop from output.' }
    ]
  },

  // Intermediate Level
  {
    id: 'dsa-trees',
    title: 'Trees & Traversals',
    description: 'Hierarchical non-linear data structure structure with a root parent node referencing child nodes. Learn Binary Trees, Depth-First (Pre-order, In-order, Post-order) traversals, and Breadth-First traversals.',
    durationEstimate: '1 week',
    category: 'Intermediate',
    interactiveDataSymbol: 'tree',
    visualExplanationSteps: [
      'Trees represent parent-child branch structures. A binary tree restricts each node to at most two children.',
      'In-order traversal: Visit Left Subtree -> Visit Node -> Visit Right Subtree. In BST, this outputs elements in sorted order.',
      'Pre-order traversal: Node -> Left -> Right. Ideal for copying/serializing a tree.',
      'Post-order traversal: Left -> Right -> Node. Used for bottom-up operations (like deleting lists or getting depth).'
    ],
    resources: [
      { id: 'tree-r1', name: 'Tree Traversal Animations - VisuAlgo', url: 'https://visualgo.net/en/bst?slide=1', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'tree-q1', text: 'Maximum Depth of Binary Tree: Find the height or maximum depth of a binary tree structural node.', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', solutionHint: 'Use recursion: Height = 1 + max(recursion(node.left), recursion(node.right)). Base case: return 0 if node is null.' },
      { id: 'tree-q2', text: 'Binary Tree Level Order Traversal: Perform BFS traversal returning elements grouped by levels.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' }
    ]
  },
  {
    id: 'dsa-bst',
    title: 'Binary Search Trees (BST)',
    description: 'A binary tree enforcing ordered node rules: every left-descendant value is strictly less than the node value, and right-descendant values are greater.',
    durationEstimate: '5 days',
    category: 'Intermediate',
    interactiveDataSymbol: 'bst',
    visualExplanationSteps: [
      'A BST keeps nodes ordered to enable rapid lookups.',
      'Search operation: compare value with root. If smaller, go left. If larger, go right. Repeat. Takes average O(log N) time!',
      'Worst case search time is O(N) if the tree degrades into a straight-line list.',
      'Self-balancing versions (AVL, Red-Black Trees) rotate nodes during insertions to guarantee O(log N) limits.'
    ],
    resources: [
      { id: 'bst-r1', name: 'Binary Search Trees Guide - VisuAlgo', url: 'https://visualgo.net/en/bst', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'bst-q1', text: 'Validate Binary Search Tree: Check if a tree satisfies the BST property.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/validate-binary-search-tree/', solutionHint: 'Pass minimum and maximum limits during recursion. Left node is bounded by (min, node.value), right by (node.value, max).' }
    ]
  },
  {
    id: 'dsa-heap',
    title: 'Heap & Priority Queue',
    description: 'A complete binary tree enforcing Heap Rules. In a Max-Heap, every parent value is greater than or equal to its children. In a Min-Heap, it is smaller.',
    durationEstimate: '5 days',
    category: 'Intermediate',
    interactiveDataSymbol: 'heap',
    visualExplanationSteps: [
      'Heaps are usually stored as compact contiguous arrays for performance.',
      'Arr[0] represents the root (the absolute maximum or minimum element).',
      'Inserting an element adds it at the end of the array, then "bubble-up" operations swap elements up to restore the heap property.',
      'Extracting root swaps it with the last element of the array, pop-offs the last item, then "bubble-down" updates root down. Both operations run in O(log N).'
    ],
    resources: [
      { id: 'heap-r1', name: 'Heap and Heap Sort - Abdul Bari', url: 'https://www.youtube.com', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'heap-q1', text: 'Kth Largest Element in an Array: Find the kth largest element without full sorting.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', solutionHint: 'Maintain a Min-Heap of size k. Put items in. If size > k, pop root. The remaining root is the kth largest item. Runs in O(N log k).' }
    ]
  },
  {
    id: 'dsa-hashing',
    title: 'Hashing & Hash Tables',
    description: 'Map unique keys to values via mathematical Hash Functions. Covers buckets, collision resolution techniques (Chaining, Open Addressing), load factor, and hash indexes.',
    durationEstimate: '4 days',
    category: 'Intermediate',
    interactiveDataSymbol: 'hashing',
    visualExplanationSteps: [
      'A Hash function maps an arbitrary key (e.g. "student_id") to an array index.',
      'Lookup, Insertion, and Deletion run in average constant O(1) time.',
      'Collisions occur when two distinct keys map to the exact same index.',
      'Chaining handles collisions by storing multiple key-value pairs in a linked list at that index.'
    ],
    resources: [
      { id: 'hash-r1', name: 'Hashing Data Structure Tutorial - GeeksforGeeks', url: 'https://geeksforgeeks.org', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'hash-q1', text: 'Longest Consecutive Sequence: Find length of longest sequence of consecutive integers inside unsorted arrays.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/', solutionHint: 'Put all elements in a Hash Set. Loop items. If item-1 is missing, it is a sequence root. Query consecutive items sequentially with set lookups in O(1).' }
    ]
  },

  // Advanced Level
  {
    id: 'dsa-graphs',
    title: 'Graphs (BFS/DFS & Shortest Paths)',
    description: 'A versatile mesh of nodes (Vertices) connected by pathways (Edges). Learn representations (Adjacency Matrix/List), Breadth-First, Depth-First traversals, Dijkstra\'s, and Minimum Spanning Trees.',
    durationEstimate: '10 days',
    category: 'Advanced',
    interactiveDataSymbol: 'graph',
    visualExplanationSteps: [
      'Graphs can represent maps, social structures, or web links.',
      'Breadth-First Search (BFS) explores neighbor nodes layer-by-layer using a Queue. Ideal for shortest paths in unweighted graphs.',
      'Depth-First Search (DFS) explores as deep as possible along branches before backtracking, using Recursion (or a Stack).',
      'Dijkstra\'s algorithm maintains a Priority Queue to track the shortest distance to each node, resolving shortest path weights.'
    ],
    resources: [
      { id: 'gph-r1', name: 'Graph Algorithms Playlist - William Fiset', url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72gFLTSpWOP', type: 'video', duration: '30 videos' }
    ],
    practiceQuestions: [
      { id: 'gph-q1', text: 'Number of Islands: Count the number of contiguous groups of land symbols inside grids.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/', solutionHint: 'Iterate of cells. When landing on "1", trigger a recursion (BFS/DFS) of neighboring land nodes marking them as visited (or "0") to prevent rep-checks. Increment counter.' },
      { id: 'gph-q2', text: 'Network Delay Time: Calculate minimum time required for all nodes to receive signals.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/network-delay-time/' }
    ]
  },
  {
    id: 'dsa-dp',
    title: 'Dynamic Programming (DP)',
    description: 'Solve complex problems by breaking them into overlapping subproblems, solving each once, and storing outcomes (Memoization or Tabulation) to prevent recalculating.',
    durationEstimate: '2 weeks',
    category: 'Advanced',
    interactiveDataSymbol: 'dp',
    visualExplanationSteps: [
      'DP balances Time vs Space. It eliminates duplicate branches in recursion trees.',
      'Memoization (Top-down): Add caching states directly to recursion branches.',
      'Tabulation (Bottom-up): Construct an iterative array/matrix grid building solutions index-by-index.',
      'Fibonacci example: Standard recursion takes O(2^N) steps. DP reduces this to O(N) linear time!'
    ],
    resources: [
      { id: 'dp-r1', name: 'Dynamic Programming Tutorials - Abdul Bari', url: 'https://www.youtube.com', type: 'video' },
      { id: 'dp-r2', name: 'Dynamic Programming for Beginners - freeCodeCamp', url: 'https://www.freecodecamp.org/news/learn-dynamic-programming-tutorial/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'dp-q1', text: 'Climbing Stairs: You are climbing a staircase of n steps. In cash step you can climb 1 or 2 steps. How many distinct combinations exist?', difficulty: 'Easy', leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/', solutionHint: 'The number of ways to reach step n is the sum of ways to reach n-1 and n-2. dp[i] = dp[i-1] + dp[i-2], this resolves to classic Fibonacci.' },
      { id: 'dp-q2', text: 'Coin Change: Compute fewest coins required to complete target transaction balances.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/coin-change/' },
      { id: 'dp-q3', text: 'Longest Common Subsequence (LCS): Find length of longest subsequence present in two target strings.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/longest-common-subsequence/' }
    ]
  },
  {
    id: 'dsa-greedy',
    title: 'Greedy Algorithms',
    description: 'An algorithm design paradigm that makes the locally optimal choice at each step in the hope of finding a global optimum.',
    durationEstimate: '1 week',
    category: 'Advanced',
    interactiveDataSymbol: 'greedy',
    visualExplanationSteps: [
      'Greedy algorithms look for short term absolute gain at each local iteration step.',
      'Does not re-examine or backtrack on prior choices.',
      'Does not guarantee global optimal outcomes for all problems, but is extremely fast when mathematically proven to do so (like Huffman coding, fractional knapsack, Prim/Kruskal).'
    ],
    resources: [
      { id: 'grd-r1', name: 'Greedy Algorithms tutorials on GeeksforGeeks', url: 'https://www.geeksforgeeks.org/greedy-algorithms/', type: 'docs' }
    ],
    practiceQuestions: [
      { id: 'grd-q1', text: 'Merge Intervals: Merge overlapping intervals inside arrays of dynamic ranges.', difficulty: 'Medium', leetcodeUrl: 'https://leetcode.com/problems/merge-intervals/', solutionHint: 'Sort intervals by starting value. Loop and keep the active interval. If the next interval starts before active ends, merge them by taking the max ending value; else push it.' }
    ]
  }
];
