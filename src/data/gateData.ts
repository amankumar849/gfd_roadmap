import { TopicNode } from '../types';

export const gateData: TopicNode[] = [
  {
    id: 'gate-math',
    title: 'Engineering Mathematics',
    description: 'Covers Linear Algebra, Calculus, and Discrete Mathematics including Propositional Logic, Set Theory, Combinatorics, and Graph Theory. Crucial for conceptual building blocks.',
    durationEstimate: '4 weeks',
    category: 'Mathematics',
    resources: [
      { id: 'math-r1', name: 'MIT Linear Algebra Lectures by Gilbert Strang', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', type: 'video', duration: '35 lectures' },
      { id: 'math-r2', name: 'Discrete Mathematics and its Applications - Kenneth Rosen', url: 'https://www.mheducation.com', type: 'book' },
      { id: 'math-r3', name: 'NPTEL Discrete Mathematics by Prof. Kamala Krithivasan', url: 'https://nptel.ac.in', type: 'video', duration: '40 hours' },
      { id: 'math-r4', name: 'GeeksforGeeks Discrete Mathematics Notes', url: 'https://www.geeksforgeeks.org/discrete-mathematics-tutorials/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'math-q1', text: 'Let A be an m x n matrix. If rank(A) = m, which of the following is always true?', difficulty: 'Medium', solutionHint: 'Think about column space, full row rank, and the existence of at least one solution to Ax = b.' },
      { id: 'math-q2', text: 'Calculate the number of elements in the power set of a set A where A = {1, 2, {3, 4}, 5}.', difficulty: 'Easy', solutionHint: 'The set has 4 elements: 1, 2, {3, 4}, and 5. The cardinality of the power set is 2^n.' },
      { id: 'math-q3', text: 'Determine the chromatic number of a complete bipartite graph K_{3,4}.', difficulty: 'Easy', solutionHint: 'Every bipartite graph with at least one edge has a chromatic number of exactly 2.' }
    ]
  },
  {
    id: 'gate-digital-logic',
    title: 'Digital Logic',
    description: 'Study of Boolean Algebra, Logic Gates, Minimization (K-Maps), Combinational Circuits (Multiplexers, Decoders, Adders), Sequential Circuits (Flip Flops, Registers, Counters), and Number Representations.',
    durationEstimate: '2 weeks',
    category: 'Digital Logic',
    resources: [
      { id: 'dl-r1', name: 'Digital Design by M. Morris Mano', url: 'https://www.pearson.com', type: 'book' },
      { id: 'dl-r2', name: 'NPTEL Digital Circuits Course', url: 'https://nptel.ac.in/courses/108105132', type: 'video', duration: '20 hours' },
      { id: 'dl-r3', name: 'Gate Smashers Digital Electronics Playlist', url: 'https://www.youtube.com/playlist?list=PLxCzCOWd7aiGZ9ZO6fSctM35vjT676S_4', type: 'video', duration: '60 videos' }
    ],
    practiceQuestions: [
      { id: 'dl-q1', text: 'Minimize the Boolean function: F(A, B, C, D) = Σm(0, 2, 5, 7, 8, 10, 13, 15).', difficulty: 'Medium', solutionHint: 'Use a 4-variable K-Map. Group the corners and diagonals to simplify.' },
      { id: 'dl-q2', text: 'How many 2x1 Multiplexers are needed to implement a 16x1 Multiplexer?', difficulty: 'Medium', solutionHint: 'At level 1 we need 8, then 4, then 2, then 1. Sum them up: 8 + 4 + 2 + 1 = 15 multiplexers.' }
    ]
  },
  {
    id: 'gate-computer-org',
    title: 'Computer Organization & Architecture',
    description: 'Focuses on Machine Instructions, Addressing Modes, ALU, CPU Control Design, Pipelining, Instruction-level Parallelism, Memory Hierarchy (Cache organization, Virtual Memory), and I/O Interface.',
    durationEstimate: '4 weeks',
    category: 'Computer Organization',
    resources: [
      { id: 'co-r1', name: 'Computer Organization and Embedded Systems by Hamacher', url: 'https://www.mheducation.com', type: 'book' },
      { id: 'co-r2', name: 'NPTEL Computer Architecture by Prof. Kamakoti', url: 'https://nptel.ac.in', type: 'video', duration: '30 lectures' },
      { id: 'co-r3', name: 'GeeksforGeeks Cache Memory Organization Tutorials', url: 'https://www.geeksforgeeks.org/cache-memory/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'co-q1', text: 'An instruction cycle has five stages: IF, ID, EX, MEM, WB taking 1ns, 1.2ns, 1.5ns, 2ns, 1.2ns respectively. What is the clock cycle time of the pipelined processor without hazards?', difficulty: 'Medium', solutionHint: 'In a pipeline, the clock cycle is limited by the slowest stage. Clock time = max(stages) + overhead.' },
      { id: 'co-q2', text: 'A cache memory has 128 blocks of 16 bytes each. Find the tag, line, and word fields for a 16-bit address under Direct Mapping.', difficulty: 'Hard', solutionHint: 'Block size of 16B implies 4 offset bits. 128 lines implies 7 index/line bits. Tag = 16 - (7 + 4) = 5 bits.' }
    ]
  },
  {
    id: 'gate-os',
    title: 'Operating System',
    description: 'Explore System Calls, Processes, Threads, CPU Scheduling, Inter-process Communication, Synchronization (Semaphores, Mutexes), Deadlock Detection and Avoidance, Memory Management, and File Systems.',
    durationEstimate: '3 weeks',
    category: 'Operating System',
    resources: [
      { id: 'os-r1', name: 'Operating System Concepts - Silberschatz and Galvin', url: 'https://codex.cs.yale.edu/avi/os-book/', type: 'book' },
      { id: 'os-r2', name: 'NPTEL Operating Systems by Prof. Chester Rebeiro', url: 'https://nptel.ac.in', type: 'video', duration: '32 lectures' },
      { id: 'os-r3', name: 'Gate Smashers Operating Systems Playlist', url: 'https://www.youtube.com', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'os-q1', text: 'Consider 3 processes p1, p2, p3 arriving at t=0 with burst times 10, 5, 2ms. What is the average waiting time using Shortest Job First (non-preemptive)?', difficulty: 'Easy', solutionHint: 'Order of execution: p3 (2ms) -> p2 (5ms) -> p1 (10ms). Wait times: p3=0, p2=2, p1=7. Average = (0+2+7)/3 = 3ms.' },
      { id: 'os-q2', text: 'Explain the conditions required for a Deadlock. How does Banker\'s Algorithm assist in deadlock avoidance?', difficulty: 'Medium', solutionHint: 'Four conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Banker\'s checks if requesting resources leaves the system in a secure state.' }
    ]
  },
  {
    id: 'gate-dbms',
    title: 'Database Management Systems',
    description: 'Learn ER-model, Relational Model, Relational Algebra, Tuple Calculus, SQL queries, Normalization (1NF, 2NF, 3NF, BCNF), Transaction Control (ACID), Concurrency Control (Serializability, Locking), and File Indexing (B/B+ Trees).',
    durationEstimate: '3 weeks',
    category: 'DBMS',
    resources: [
      { id: 'db-r1', name: 'Database System Concepts - Korth & Sudarshan', url: 'https://db-book.com', type: 'book' },
      { id: 'db-r2', name: 'SQL Tutorial - w3schools', url: 'https://www.w3schools.com/sql/', type: 'docs' },
      { id: 'db-r3', name: 'Gate Smashers DBMS Playlist', url: 'https://www.youtube.com', type: 'video', duration: '50 videos' }
    ],
    practiceQuestions: [
      { id: 'db-q1', text: 'Given a relation R(A,B,C,D,E) with FDs: A->B, BC->D, E->C. Find the candidate keys of R.', difficulty: 'Hard', solutionHint: 'Find the closure of attributes. Combined closure of (A,E) is {A,E,B,C,D}, which covers all attributes. So AE is the candidate key.' },
      { id: 'db-q2', text: 'Which lock protocols guarantee Conflict Serializability? Does Two-Phase Locking (2PL) prevent deadlocks?', difficulty: 'Medium', solutionHint: '2PL ensures conflict serializability but does NOT prevent deadlocks. Strict 2PL is used to prevent cascading rollbacks.' }
    ]
  },
  {
    id: 'gate-cn',
    title: 'Computer Networks',
    description: 'Comprehensive study of ISO/OSI Stack vs TCP/IP, Flow and Error Control, Medium Access Protocols, IPv4 Routing & Subnetting, TCP/UDP Congestion Control, and Application layer protocols (HTTP, DNS, SMTP).',
    durationEstimate: '4 weeks',
    category: 'Computer Networks',
    resources: [
      { id: 'cn-r1', name: 'Computer Networking: A Top-Down Approach - Kurose & Ross', url: 'https://www.pearson.com', type: 'book' },
      { id: 'cn-r2', name: 'NPTEL Network Engineering Lectures', url: 'https://nptel.ac.in', type: 'video' },
      { id: 'cn-r3', name: 'Computer Networks Playlist by Ravindrababu Ravula', url: 'https://www.youtube.com', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'cn-q1', text: 'An IP subnet has mask 255.255.255.224. How many usable host IP addresses are available in this subnet?', difficulty: 'Easy', solutionHint: '.224 in binary is 11100000. So there are 5 bits for hosts. 2^5 - 2 = 30 usable host addresses.' },
      { id: 'cn-q2', text: 'What is the maximum window size in Selective Repeat protocol if sequence numbers are 3 bits?', difficulty: 'Medium', solutionHint: 'For Selective Repeat, Sender Window (Ws) + Receiver Window (Wr) <= 2^k. Typically Ws = Wr = 2^(k-1) = 2^(3-1) = 4.' }
    ]
  },
  {
    id: 'gate-toc',
    title: 'Theory of Computation',
    description: 'Introduction to Automata Theory. Covers Finite Automata (DFA, NFA), Regular Expressions, Context-Free Grammars (CFG), Pushdown Automata (PDA), Turing Machines, Decidability, and Complexity classes (P/NP).',
    durationEstimate: '4 weeks',
    category: 'Theory of Computation',
    resources: [
      { id: 'toc-r1', name: 'Introduction to the Theory of Computation - Michael Sipser', url: 'http://sipser.mit.edu', type: 'book' },
      { id: 'toc-r2', name: 'Shai Simonson Automata Theory Playlist', url: 'https://www.youtube.com', type: 'video', duration: '30 lectures' },
      { id: 'toc-r3', name: 'GeeksforGeeks Automata Theory Tutorials', url: 'https://www.geeksforgeeks.org/introduction-of-theory-of-computation/', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'toc-q1', text: 'Is the language L = {a^n b^n c^m | n, m >= 0} context-free? Under what operations are context-free languages closed?', difficulty: 'Medium', solutionHint: 'Yes, it is context-free. PDA can push "a"s and pop with "b"s; "c"s are scanned independently. CFLs are closed under union and concatenation, but not intersection.' },
      { id: 'toc-q2', text: 'Explain why the Halting Problem of Turing Machines is undecidable but semi-decidable.', difficulty: 'Hard', solutionHint: 'Diagonalization argument proves no general algorithm exists. However, we can simulate the machine; it halts eventualy if it is in the language.' }
    ]
  },
  {
    id: 'gate-compiler',
    title: 'Compiler Design',
    description: 'Learn phases of a compiler: Lexical Analysis, Parsing (LL, LR parsers), Syntax Directed Translation, Intermediate Code Generation (three-address code), System Software Runtime Environment, and Code Optimization.',
    durationEstimate: '2 weeks',
    category: 'Compiler Design',
    resources: [
      { id: 'cd-r1', name: 'Compilers: Principles, Techniques, and Tools - Aho & Ullman', url: 'https://www.pearson.com', type: 'book' },
      { id: 'cd-r2', name: 'NPTEL Compiler Design Lectures by Prof. Y.N. Srikant', url: 'https://nptel.ac.in', type: 'video' },
      { id: 'cd-r3', name: 'Gate Smashers Compiler Construction Tutorials', url: 'https://www.youtube.com', type: 'video' }
    ],
    practiceQuestions: [
      { id: 'cd-q1', text: 'Identify the conflicts that can occur in an LR(0) or SLR(1) parser state table.', difficulty: 'Medium', solutionHint: 'Shift-Reduce (S/R) conflict and Reduce-Reduce (R/R) conflict occur when the parser cannot decide whether to shift or reduce.' },
      { id: 'cd-q2', text: 'Given a statement "x = a * b + a * b", perform Common Subexpression Elimination.', difficulty: 'Easy', solutionHint: 'Identify duplicate operations. Compile as: t1 = a * b, x = t1 + t1.' }
    ]
  },
  {
    id: 'gate-algorithms',
    title: 'Algorithms & Data Structures',
    description: 'Core of engineering. Learn Asymptotic analysis (Big O), Sorting, Searching, Divide and Conquer, Greedy Algorithms, Dynamic Programming, Basic Stack, Queues, Graphs (BFS/DFS, MST, Shortest Paths), and Complexity classes.',
    durationEstimate: '4 weeks',
    category: 'Algorithms',
    resources: [
      { id: 'algo-r1', name: 'Introduction to Algorithms - Cormen, Leiserson, Rivest, Stein', url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/', type: 'book' },
      { id: 'algo-r2', name: 'MIT 6.006 Introduction to Algorithms', url: 'https://ocw.mit.edu', type: 'video' },
      { id: 'algo-r3', name: 'Abdul Bari Algorithms Playlist', url: 'https://www.youtube.com', type: 'video', duration: '84 videos' }
    ],
    practiceQuestions: [
      { id: 'algo-q1', text: 'What is the recurrence relation for Merge Sort and its asymptotic time complexity?', difficulty: 'Easy', solutionHint: 'Recurrence is T(n) = 2T(n/2) + O(n). By Master Theorem, it yields O(n log n) in all cases.' },
      { id: 'algo-q2', text: 'Solve the single-source shortest path problem on a graph with negative edge weights without negative cycles. Which algorithm should be utilized?', difficulty: 'Medium', solutionHint: 'Dijkstra\'s fails with negative weights. Use Bellman-Ford algorithm, which runs in O(VE) complexity and detects negative cycles.' }
    ]
  },
  {
    id: 'gate-aptitude',
    title: 'General Aptitude',
    description: 'Covers Quantitative Aptitude, Numerical reasoning, English grammar, vocab, Data Interpretation, and Logical/Spatial Reasoning. Carries 15% weight in GATE exam!',
    durationEstimate: '2 weeks',
    category: 'Aptitude',
    resources: [
      { id: 'apt-r1', name: 'Quantitative Aptitude for Competitive Examinations - R.S. Aggarwal', url: 'https://www.schandpublishing.com', type: 'book' },
      { id: 'apt-r2', name: 'IndiaBIX Aptitude Practice Portal', url: 'https://www.indiabix.com', type: 'docs' },
      { id: 'apt-r3', name: 'GATE Aptitude Previous Years Solved Questions', url: 'https://geeksforgeeks.org', type: 'article' }
    ],
    practiceQuestions: [
      { id: 'apt-q1', text: 'A train 120m long passes a pole in 6s. Find the speed of the train in km/h.', difficulty: 'Easy', solutionHint: 'Speed = Distance / Time = 120m / 6s = 20 m/s. In km/h: 20 * (18/5) = 72 km/h.' },
      { id: 'apt-q2', text: 'If probability of a coin toss landing heads is 0.6, find the probability of getting at least one head in 3 independent flips.', difficulty: 'Medium', solutionHint: 'P(at least 1 head) = 1 - P(all tails) = 1 - (0.4 * 0.4 * 0.4) = 1 - 0.064 = 0.936.' }
    ]
  }
];
