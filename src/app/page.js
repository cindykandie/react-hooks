import Link from 'next/link';


const hooks = [
  'useState',
  'useEffect',
  'useLayoutEffect',
  'useContext',
  'useReducer',
  'useRef',
  'useMemo',
  'useCallback',
  'useImperativeHandle',
  'useDebugValue',
  
];

export default function Home() {
  return (
    <div className="container m-auto h-full my-5 p-4 border">
      <h1 className="text-2xl font-bold mb-4">Mastering React Hooks: From Hesitant to Hooked!
 </h1>
      <h1 className="text-2xl font-bold mb-4">List of React Hooks</h1>
      <ul>
        {hooks.map((hook) => (
          <li key={hook}>
            <Link
              href={`/${hook}`}
              className="text-brown-600 hover:text-blue-600 hover:font-bold py-4"
            >
              - {hook}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
