export function UndoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M7.53 3.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L5.06 7l2.47-2.47a.75.75 0 0 0 0-1.06Z"
          clipRule="evenodd"
        ></path>
        <path
          d="M5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81L5.06 7l.75-.75Z"
          opacity=".5"
        ></path>
      </g>
    </svg>
  );
}
