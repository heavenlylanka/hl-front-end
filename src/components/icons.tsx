export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  arrowUpRight: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.85}
        strokeWidth={2}
        d="M15 15V9m0 0H9m6 0-6 6m-1.2 6h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21Z"
      />
    </svg>
  ),
  since2016svg: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={283}
      height={92}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        fillOpacity={0.1}
        d="M103.254 19.867c6.701 0 9.479-.895 9.479-4.098 0-3.176-2.37-4.18-6.973-4.451l-6.62-.434c-1.715-.109-2.696-.218-2.696-1.358 0-1.167 1.253-1.384 5.285-1.384 3.186 0 6.482.299 9.424.787l.626-2.687c-2.315-.38-6.292-.814-9.124-.814-6.565 0-10.024.76-10.024 4.126 0 2.958 1.825 4.016 6.074 4.26l6.483.38c2.669.19 3.731.354 3.731 1.548 0 1.14-1.171 1.384-5.148 1.384-3.84 0-7.517-.516-10.187-1.004l-.68 2.66c2.424.542 6.291 1.085 10.35 1.085ZM119.445 3.935V0h-4.058v3.935h4.058ZM115.387 5.808v13.706h4.058V5.808h-4.058ZM122.888 5.808v13.706h4.058v-9.2c3.133-.923 5.938-1.439 8.199-1.439 3.487 0 5.039 1.276 5.039 3.718v6.921h4.059v-7.518c0-4.668-2.833-6.54-7.79-6.54-3.487 0-6.892.976-9.725 2.116l-.272-1.764h-3.568ZM158.663 5.455c-8.335 0-11.821 2.117-11.821 7.166 0 5.048 3.486 7.192 11.821 7.192 3.568 0 6.728-.461 9.098-1.004l-.845-3.284c-1.906.407-4.658.841-8.825.841-5.23 0-7.191-.841-7.191-3.745 0-2.877 1.961-3.719 7.191-3.719 4.167 0 6.919.435 8.825.842l.845-3.257c-2.37-.57-5.666-1.032-9.098-1.032Z"
      />
      <path
        fill="#000"
        fillOpacity={0.1}
        fillRule="evenodd"
        d="M189.745 15.85a49.49 49.49 0 0 1-8.771.787c-5.012 0-7.109-.542-7.545-3.012h17.433c.054-.326.109-1.276.109-1.846 0-4.668-4.331-6.324-10.732-6.324-6.892 0-10.814 2.063-10.814 7.193 0 5.21 3.541 7.22 11.195 7.22 3.541 0 7.518-.462 9.969-1.06l-.844-2.958Zm-16.316-4.396c.381-2.416 2.288-3.23 6.673-3.23 5.067 0 6.592 1.004 6.864 3.23h-13.537ZM114.648 36.924c-7.571 0-13.568 1.644-17.749 5.168-4.267 3.598-6.24 9.269-6.24 16.633 0 6.589 1.609 11.853 5.057 15.548l1.048 1.123 37.529-37.299-2.748-.532c-2.221-.43-4.692-.64-7.404-.64h-9.493Zm-15.828 7.43c3.437-2.9 8.633-4.468 15.828-4.468h9.493c1.407 0 2.728.06 3.963.179L96.91 71.068c-2.133-2.915-3.278-6.975-3.278-12.343 0-6.883 1.837-11.547 5.188-14.372ZM142.976 43.167l-1.049-1.103-37.618 37.39 2.767.521c2.277.43 4.804.639 7.572.639h9.493c7.572 0 13.569-1.643 17.749-5.168l.01-.008c4.257-3.655 6.23-9.346 6.23-16.713 0-6.595-1.641-11.862-5.154-15.558Zm-28.328 34.485c-1.466 0-2.842-.062-4.131-.185l31.286-31.096c2.184 2.916 3.354 6.979 3.354 12.354 0 6.878-1.834 11.578-5.192 14.464-3.438 2.896-8.631 4.463-15.824 4.463h-9.493Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillOpacity={0.1}
        fillRule="evenodd"
        d="M113.681 25.538c-11.535 0-20.74 2.74-27.42 8.411-6.69 5.669-9.93 14.019-9.93 24.776 0 10.814 3.239 19.22 9.923 24.947l.012.01C92.946 89.29 102.149 92 113.68 92h11.427c11.588 0 20.795-2.708 27.421-8.323l.006-.005c6.685-5.727 9.923-14.133 9.923-24.947 0-10.756-3.239-19.105-9.926-24.773-6.626-5.675-15.835-8.414-27.424-8.414h-11.427ZM88.187 36.205c5.977-5.073 14.41-7.705 25.494-7.705h11.427c11.146 0 19.575 2.633 25.489 7.7l.006.005c5.851 4.959 8.882 12.374 8.882 22.52 0 10.205-3.031 17.681-8.885 22.698-5.914 5.01-14.344 7.615-25.492 7.615h-11.427c-11.084 0-19.518-2.602-25.494-7.617-5.852-5.017-8.882-12.492-8.882-22.696 0-10.146 3.031-17.562 8.882-22.52ZM217.744 63.112l.241 1.69c.703 4.934 2.389 8.838 5.218 11.508 2.847 2.688 6.67 3.953 11.284 3.953h23.294c3.372 0 6.196-.606 8.296-2l.014-.01.013-.009c2.208-1.54 3.271-3.834 3.271-6.644 0-2.767-1.076-5.01-3.298-6.487-2.1-1.395-4.924-2-8.296-2h-40.037Zm7.503 11.048c-1.9-1.793-3.277-4.443-4.027-8.085h36.561c3.073 0 5.23.561 6.647 1.503 1.294.86 1.975 2.118 1.975 4.022 0 1.971-.69 3.295-1.989 4.208-1.417.935-3.57 1.493-6.633 1.493h-23.294c-4.058 0-7.077-1.1-9.24-3.14Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillOpacity={0.1}
        fillRule="evenodd"
        d="M240.552 25.976c-11.514 0-20.704 2.556-27.383 7.855l-.006.004c-6.733 5.393-9.96 13.806-9.96 24.89 0 10.172 2.585 18.306 7.944 24.205l.005.005c5.383 5.863 12.911 8.715 22.368 8.715h26.986c6.752 0 12.265-1.701 16.361-5.272C281.001 82.774 283 77.75 283 71.513c0-6.074-2.008-10.98-6.138-14.52-4.095-3.567-9.607-5.267-16.356-5.267h-39.232c.995-4.039 2.958-6.751 5.776-8.356l.006-.004c3.442-1.982 8.222-3.041 14.463-3.041h35.943V25.976h-36.91Zm-25.53 10.17c5.978-4.742 14.426-7.208 25.53-7.208h33.938v8.424h-32.971c-6.531 0-11.888 1.101-15.947 3.438-4.18 2.381-6.652 6.544-7.582 12.167l-.285 1.721h42.801c6.256 0 10.998 1.57 14.403 4.539l.01.009c3.367 2.883 5.108 6.91 5.108 12.277 0 5.558-1.751 9.7-5.118 12.636-3.405 2.97-8.147 4.538-14.403 4.538H233.52c-8.823 0-15.475-2.635-20.172-7.748-4.719-5.195-7.172-12.534-7.172-22.214 0-10.517 3.042-17.927 8.846-22.578ZM1.406 26.064v14.348h48.25c2.607 0 4.285.559 5.298 1.42.968.822 1.566 2.124 1.566 4.193 0 2.07-.598 3.372-1.566 4.194-1.013.861-2.691 1.42-5.299 1.42H20.736c-6.515 0-11.72 1.671-15.369 5.241C1.728 60.442 0 65.391 0 71.513v20.05h71.447V77.3h-54.85v-5.613c0-2.012.538-3.338 1.41-4.208.919-.915 2.384-1.493 4.663-1.493h29.71c6.36 0 11.495-1.711 15.19-5.325 3.749-3.61 5.547-8.555 5.547-14.637 0-6.082-1.798-11.026-5.548-14.636-3.694-3.614-8.83-5.325-15.189-5.325H1.406ZM4.38 37.45v-8.424H52.38c5.827 0 10.125 1.557 13.11 4.48l.01.01c3.045 2.928 4.644 7.033 4.644 12.51 0 5.476-1.6 9.58-4.644 12.51l-.01.009c-2.985 2.923-7.283 4.48-13.11 4.48H22.67c-2.76 0-5.104.706-6.764 2.36-1.589 1.584-2.282 3.76-2.282 6.303v8.575h54.85V88.6H2.973V71.513c0-5.556 1.553-9.658 4.477-12.52 2.915-2.852 7.261-4.392 13.286-4.392h28.92c2.96 0 5.456-.624 7.227-2.128 1.815-1.542 2.61-3.787 2.61-6.448 0-2.66-.795-4.905-2.61-6.447-1.77-1.504-4.268-2.128-7.228-2.128H4.38ZM161.251 26.151V40.5h18.635v51.062h16.597v-65.41h-35.232Zm2.973 11.387v-8.424h29.286V88.6h-10.651V37.538h-18.635Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  mail: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke="#7F56D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.667 6c0-1.1-.9-2-2-2h-16c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2V6m20 0-10 7-10-7"
      />
    </svg>
  ),
  phone: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke="#7F56D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  ),
  map: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      fill="none"
      {...props}
    >
      <g
        stroke="#7F56D9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M21.333 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
        <path d="M12.333 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </g>
    </svg>
  ),
  facebook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#1877F2"
          d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12Z"
        />
        <path
          fill="#fff"
          d="M16.671 15.469 17.203 12h-3.328V9.75c0-.949.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.13 12.13 0 0 0 3.75 0V15.47h2.796Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),

  instergram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g fill="#000100">
        <path d="M12 2.16c3.206 0 3.586.015 4.847.071 1.172.052 1.805.249 2.226.413a3.71 3.71 0 0 1 1.379.895c.421.422.68.82.895 1.378.164.422.36 1.06.412 2.227.057 1.265.07 1.645.07 4.847 0 3.206-.013 3.586-.07 4.846-.051 1.172-.248 1.805-.412 2.227-.216.558-.478.961-.895 1.378a3.69 3.69 0 0 1-1.379.895c-.421.165-1.059.361-2.226.413-1.266.056-1.645.07-4.847.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.248-2.226-.413a3.71 3.71 0 0 1-1.379-.895 3.691 3.691 0 0 1-.895-1.378c-.164-.422-.36-1.06-.412-2.227-.057-1.265-.07-1.645-.07-4.846 0-3.207.013-3.586.07-4.847.051-1.172.248-1.805.412-2.227.216-.558.478-.96.895-1.378.422-.422.82-.68 1.379-.895.421-.164 1.059-.361 2.226-.413 1.261-.056 1.64-.07 4.847-.07ZM12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a5.857 5.857 0 0 0-2.128 1.388A5.88 5.88 0 0 0 .628 4.139C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12s.014 3.666.07 4.945c.057 1.275.263 2.152.558 2.911.31.792.717 1.463 1.388 2.128a5.866 5.866 0 0 0 2.123 1.383c.764.296 1.636.502 2.911.558 1.28.056 1.688.07 4.945.07 3.258 0 3.666-.014 4.946-.07 1.275-.056 2.151-.262 2.91-.558a5.866 5.866 0 0 0 2.124-1.383 5.866 5.866 0 0 0 1.383-2.123c.295-.764.501-1.636.558-2.911.056-1.28.07-1.688.07-4.945 0-3.258-.014-3.666-.07-4.946-.057-1.275-.263-2.151-.558-2.91a5.62 5.62 0 0 0-1.374-2.133A5.866 5.866 0 0 0 19.861.633C19.097.338 18.225.13 16.95.075 15.666.015 15.258 0 12 0Z" />
        <path d="M12 5.836A6.166 6.166 0 0 0 5.836 12 6.166 6.166 0 0 0 12 18.164 6.166 6.166 0 0 0 18.164 12 6.166 6.166 0 0 0 12 5.836Zm0 10.162A3.999 3.999 0 1 1 12.001 8 3.999 3.999 0 0 1 12 15.998ZM19.847 5.592a1.44 1.44 0 1 1-2.879 0 1.44 1.44 0 0 1 2.879 0Z" />
      </g>
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#FF0302"
          d="M23.522 6.185A3.017 3.017 0 0 0 21.4 4.05c-1.877-.505-9.377-.505-9.377-.505s-7.5 0-9.376.505A3.016 3.016 0 0 0 .525 6.185C.023 8.07.023 12 .023 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.876.505 9.376.505 9.376.505s7.5 0 9.377-.505a3.017 3.017 0 0 0 2.122-2.136c.501-1.884.501-5.814.501-5.814s0-3.93-.501-5.815Z"
        />
        <path fill="#FEFEFE" d="M9.57 15.569V8.432L15.841 12 9.57 15.57Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  tiktok: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="#FF004F"
        d="M17.176 8.663a9.362 9.362 0 0 0 5.476 1.76V6.478c-.386 0-.772-.04-1.15-.121v3.104a9.364 9.364 0 0 1-5.476-1.759v8.048c0 4.026-3.252 7.289-7.263 7.289a7.21 7.21 0 0 1-4.043-1.233A7.228 7.228 0 0 0 9.913 24c4.011 0 7.263-3.263 7.263-7.29V8.664Zm1.419-3.978a5.506 5.506 0 0 1-1.419-3.218V.96h-1.09a5.521 5.521 0 0 0 2.509 3.725ZM7.257 18.718a3.328 3.328 0 0 1-.678-2.019 3.328 3.328 0 0 1 4.33-3.178V9.49a7.302 7.302 0 0 0-1.15-.067v3.138a3.328 3.328 0 0 0-4.33 3.178c0 1.302.744 2.43 1.828 2.979Z"
      />
      <path
        fill="#000"
        fillOpacity={0.85}
        d="M16.027 7.703a9.364 9.364 0 0 0 5.476 1.759V6.358a5.492 5.492 0 0 1-2.907-1.673A5.522 5.522 0 0 1 16.087.96h-2.862v15.75a3.329 3.329 0 0 1-3.323 3.324 3.314 3.314 0 0 1-2.645-1.316 3.335 3.335 0 0 1-1.827-2.979 3.328 3.328 0 0 1 4.33-3.178V9.423c-3.94.082-7.11 3.313-7.11 7.288 0 1.984.79 3.782 2.07 5.096a7.21 7.21 0 0 0 4.044 1.233c4.011 0 7.263-3.264 7.263-7.29V7.704Z"
      />
      <path
        fill="#00F2EA"
        d="M21.503 6.358v-.84a5.46 5.46 0 0 1-2.908-.833 5.487 5.487 0 0 0 2.908 1.673ZM16.087.96a5.611 5.611 0 0 1-.06-.453V0h-3.953v15.75a3.328 3.328 0 0 1-3.322 3.324 3.299 3.299 0 0 1-1.495-.356 3.314 3.314 0 0 0 2.645 1.316 3.329 3.329 0 0 0 3.322-3.323V.96h2.863ZM9.76 9.423V8.53a7.308 7.308 0 0 0-.996-.068c-4.012 0-7.264 3.263-7.264 7.289a7.289 7.289 0 0 0 3.22 6.056 7.278 7.278 0 0 1-2.07-5.096c0-3.974 3.17-7.206 7.11-7.288Z"
      />
    </svg>
  ),
  linkedIn: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#0A66C2"
          d="M22.228 0H1.772A1.772 1.772 0 0 0 0 1.772v20.456A1.772 1.772 0 0 0 1.772 24h20.456A1.772 1.772 0 0 0 24 22.228V1.772A1.772 1.772 0 0 0 22.228 0ZM7.153 20.445H3.545V8.983h3.608v11.462ZM5.347 7.395a2.072 2.072 0 1 1 2.083-2.07 2.042 2.042 0 0 1-2.083 2.07Zm15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H9.32V8.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695l-.002 7.09Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  doubleArrows: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        strokeWidth={2}
        d="m6 17 5-5-5-5m7 10 5-5-5-5"
      />
    </svg>
  ),
  lineVector1: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={282}
      height={513}
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <path
          stroke="url(#b)"
          strokeLinecap="round"
          strokeOpacity={0.5}
          strokeWidth={10}
          d="M172.5 5c40.167 37.833 116.8 121 102 151C256 193.5 109 147.5 88 201s86.001 152.5 79 214.5c-7 62-112.333 73.167-167 92"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={138.186}
          x2={0.5}
          y1={5}
          y2={508}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7D5FF" />
          <stop offset={1} stopColor="#AF73FF" stopOpacity={0} />
        </linearGradient>
        <filter
          id="a"
          width={326.373}
          height={552.501}
          x={-25.002}
          y={-20}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1185_20234"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1185_20234"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  lineVector2: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={282}
      height={513}
      fill="none"
      {...props}
    >
      <g filter="url(#a)">
        <path
          stroke="url(#b)"
          strokeLinecap="round"
          strokeOpacity={0.5}
          strokeWidth={10}
          d="M109.5 508C69.333 470.167-7.3 387 7.5 357 26 319.5 173 365.5 194 312s-86.001-152.5-79-214.5c7-62 112.333-73.167 167-92"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={143.814}
          x2={281.5}
          y1={508}
          y2={5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E7D5FF" />
          <stop offset={1} stopColor="#AF73FF" stopOpacity={0} />
        </linearGradient>
        <filter
          id="a"
          width={326.373}
          height={552.501}
          x={-19.371}
          y={-19.501}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={10} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1185_20235"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1185_20235"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  ourMissionLarge: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#000"
        fillOpacity={0.25}
        d="M23.262 44.456C8.917 44.456 0 35.694 0 22.228 0 8.762 8.917 0 23.262 0c14.667 0 23.52 8.762 23.52 22.228 0 13.466-8.852 22.228-23.52 22.228Zm0-9.278c9.498 0 13.181-3.35 13.181-12.95S32.76 9.278 23.262 9.278c-9.499 0-12.988 3.35-12.988 12.95s3.49 12.95 12.988 12.95ZM64.384 44.456c-9.11 0-13.44-5.605-13.44-12.821V11.533h9.692v16.88c0 5.22 2.197 7.41 8.336 7.41 6.332 0 8.594-2.449 8.594-7.925V11.533h9.692v32.28h-9.046v-9.859h-.517c-.84 5.412-4.782 10.502-13.31 10.502ZM101.906 43.812h-9.692v-32.28h8.981v8.57h.582c.905-5.219 4.329-9.213 10.855-9.213 7.237 0 10.21 4.96 10.21 11.275v5.347h-9.693v-3.35c0-3.544-1.421-5.09-5.363-5.09-4.329 0-5.88 1.997-5.88 6.056v18.685ZM11.034 95.356H1.342V52.188h13.117L24.602 73.45l4.071 10.115h.71l3.942-10.115 9.822-21.262H56.33v43.168h-9.693V73.45l.323-6.765h-.71l-2.52 6.765-9.047 19.328h-11.76L13.877 73.45l-2.52-6.765h-.71l.387 6.765v21.906ZM71.106 59.79h-9.692v-7.602h9.692v7.603Zm0 35.566h-9.692v-32.28h9.692v32.28ZM92.528 96c-10.92 0-16.93-4.252-16.93-11.726v-.194h9.693v.58c0 2.9 1.809 3.673 7.301 3.673 5.17 0 6.397-.838 6.397-2.77 0-1.805-.97-2.32-4.781-2.835l-9.111-1.096c-6.462-.709-10.08-3.608-10.08-9.02 0-5.67 4.846-10.18 15.96-10.18 10.597 0 16.606 3.995 16.606 11.855v.194h-9.692v-.387c0-2.642-1.293-3.995-7.237-3.995-4.846 0-6.074.838-6.074 2.9 0 1.675.904 2.384 5.17 2.899l6.913.838c8.659.966 11.889 3.865 11.889 9.213 0 6.056-6.009 10.051-16.024 10.051ZM128.811 96c-10.92 0-16.929-4.252-16.929-11.726v-.194h9.692v.58c0 2.9 1.809 3.673 7.301 3.673 5.17 0 6.397-.838 6.397-2.77 0-1.805-.969-2.32-4.781-2.835l-9.111-1.096c-6.462-.709-10.08-3.608-10.08-9.02 0-5.67 4.846-10.18 15.96-10.18 10.597 0 16.606 3.995 16.606 11.855v.194h-9.692v-.387c0-2.642-1.292-3.995-7.237-3.995-4.846 0-6.074.838-6.074 2.9 0 1.675.905 2.384 5.169 2.899l6.914.838c8.659.966 11.89 3.865 11.89 9.213 0 6.056-6.01 10.051-16.025 10.051ZM158.439 59.79h-9.693v-7.602h9.693v7.603Zm0 35.566h-9.693v-32.28h9.693v32.28ZM180.764 96c-11.049 0-18.48-6.572-18.48-16.752 0-10.308 7.431-16.816 18.48-16.816 11.05 0 18.481 6.508 18.481 16.816 0 10.18-7.431 16.752-18.481 16.752Zm0-8.57c6.527 0 8.853-2.512 8.853-8.182s-2.326-8.311-8.853-8.311c-6.59 0-8.852 2.642-8.852 8.311 0 5.67 2.262 8.183 8.852 8.183ZM212.895 95.356h-9.692v-32.28h8.981V73h.582c.84-5.412 4.717-10.567 13.182-10.567 8.852 0 13.052 5.67 13.052 12.822v20.102h-9.692v-16.88c0-5.155-2.133-7.346-8.077-7.346-6.139 0-8.336 2.449-8.336 7.925v16.3Z"
      />
    </svg>
  ),
  ourMissionSmall: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <g fill="#000" fillOpacity={0.25}>
        <path d="M15.475 29.84C5.932 29.84 0 23.998 0 15.02S5.932.202 15.475.202c9.758 0 15.648 5.842 15.648 14.82 0 8.976-5.89 14.818-15.648 14.818Zm0-6.185c6.32 0 8.77-2.234 8.77-8.634s-2.45-8.633-8.77-8.633c-6.319 0-8.64 2.233-8.64 8.633 0 6.4 2.321 8.634 8.64 8.634ZM42.833 29.84c-6.061 0-8.941-3.737-8.941-8.548V7.891h6.448v11.254c0 3.479 1.461 4.94 5.545 4.94 4.213 0 5.717-1.633 5.717-5.284V7.89h6.448v21.52h-6.018v-6.573h-.344c-.559 3.609-3.18 7.002-8.855 7.002ZM67.795 29.41h-6.448V7.89h5.976v5.714h.386c.602-3.48 2.88-6.143 7.222-6.143 4.815 0 6.792 3.308 6.792 7.517v3.565h-6.448V16.31c0-2.363-.946-3.394-3.568-3.394-2.88 0-3.912 1.332-3.912 4.038V29.41ZM7.34 63.773H.893V34.994H9.62l6.749 14.175 2.708 6.743h.473l2.622-6.743 6.534-14.175h8.77v28.779h-6.449V49.169l.215-4.51h-.473l-1.676 4.51-6.018 12.886H15.25L9.232 49.169l-1.677-4.51h-.472l.258 4.51v14.604ZM47.305 40.063h-6.448v-5.069h6.448v5.069Zm0 23.71h-6.448v-21.52h6.448v21.52ZM61.556 64.202c-7.265 0-11.263-2.835-11.263-7.817v-.129h6.448v.386c0 1.933 1.204 2.449 4.858 2.449 3.439 0 4.256-.559 4.256-1.847 0-1.203-.645-1.546-3.181-1.89l-6.062-.73c-4.298-.473-6.706-2.406-6.706-6.014 0-3.78 3.224-6.786 10.618-6.786 7.05 0 11.048 2.663 11.048 7.903v.129h-6.448v-.258c0-1.76-.86-2.663-4.815-2.663-3.224 0-4.04.558-4.04 1.933 0 1.117.601 1.59 3.439 1.933l4.6.558c5.76.645 7.909 2.578 7.909 6.143 0 4.037-3.998 6.7-10.661 6.7ZM85.694 64.202c-7.265 0-11.262-2.835-11.262-7.817v-.129h6.448v.386c0 1.933 1.203 2.449 4.857 2.449 3.44 0 4.256-.559 4.256-1.847 0-1.203-.645-1.546-3.181-1.89l-6.061-.73c-4.299-.473-6.706-2.406-6.706-6.014 0-3.78 3.224-6.786 10.618-6.786 7.05 0 11.047 2.663 11.047 7.903v.129h-6.448v-.258c0-1.76-.86-2.663-4.814-2.663-3.224 0-4.041.558-4.041 1.933 0 1.117.602 1.59 3.439 1.933l4.6.558c5.76.645 7.91 2.578 7.91 6.143 0 4.037-3.999 6.7-10.662 6.7ZM105.405 40.063h-6.448v-5.069h6.448v5.069Zm0 23.71h-6.448v-21.52h6.448v21.52ZM120.258 64.202c-7.351 0-12.295-4.38-12.295-11.167 0-6.873 4.944-11.211 12.295-11.211 7.35 0 12.294 4.338 12.294 11.21 0 6.787-4.944 11.168-12.294 11.168Zm0-5.712c4.341 0 5.889-1.676 5.889-5.456 0-3.78-1.548-5.54-5.889-5.54-4.385 0-5.89 1.76-5.89 5.54 0 3.78 1.505 5.456 5.89 5.456ZM141.633 63.773h-6.448v-21.52h5.975v6.615h.387c.559-3.608 3.138-7.044 8.77-7.044 5.889 0 8.683 3.78 8.683 8.547v13.402h-6.448V52.519c0-3.436-1.419-4.897-5.373-4.897-4.084 0-5.546 1.633-5.546 5.284v10.867Z" />
      </g>
    </svg>
  ),
  theTeamBehindLarge: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#000"
        fillOpacity={0.25}
        d="M26.02 43.46h-9.73V8.756H.14V0h42.032v8.757H26.02V43.46ZM55.39 43.46h-9.73V0h9.73v20.887h.519c1.038-5.514 4.865-10.574 13.167-10.574 8.757 0 13.038 5.709 13.038 13.233v19.913h-9.73V26.465c0-5.449-2.335-7.395-8.432-7.395-6.551 0-8.562 2.66-8.562 8.108V43.46ZM104.278 44.108c-10.832 0-18.227-5.319-18.227-16.865 0-10.378 7.33-16.93 18.033-16.93 10.638 0 17.708 5.579 17.708 15.763 0 1.167-.13 2.01-.26 3.113H95.068c.259 4.995 2.594 7.135 8.886 7.135 5.773 0 7.784-1.492 7.784-4.28v-.65h9.73v.714c0 7.07-6.876 12-17.19 12Zm-.389-26.205c-5.773 0-8.238 1.946-8.692 6.162h17.254c-.259-4.281-2.854-6.162-8.562-6.162ZM25.881 95.351h-9.73V60.65H0v-8.757h42.032v8.757h-16.15V95.35ZM62.775 96c-10.832 0-18.227-5.319-18.227-16.865 0-10.378 7.33-16.93 18.032-16.93 10.638 0 17.709 5.579 17.709 15.763 0 1.167-.13 2.01-.26 3.113H53.564c.26 4.995 2.595 7.135 8.887 7.135 5.773 0 7.783-1.492 7.783-4.28v-.65h9.73V84c0 7.07-6.876 12-17.189 12Zm-.39-26.205c-5.772 0-8.237 1.945-8.691 6.162h17.254c-.26-4.281-2.854-6.162-8.562-6.162ZM94.404 96c-7.006 0-11.222-3.243-11.222-8.692 0-4.8 3.568-7.784 10.508-8.497l13.946-1.427V76.15c0-4.216-1.881-5.383-7.07-5.383-4.93 0-6.94 1.297-6.94 4.994v.26H83.83v-.195c0-8.043 6.746-13.622 17.448-13.622 10.833 0 15.957 5.579 15.957 14.076v19.07h-9.081v-7.46h-.519C106.144 92.952 101.604 96 94.404 96Zm-1.427-9.34c0 1.75 1.362 2.464 4.216 2.464 6.616 0 10.184-1.556 10.443-6.162L96.35 84.26c-2.335.195-3.373.844-3.373 2.4ZM131.898 95.351h-9.73V62.854h9.016v9.86h.519c.778-5.45 4.022-10.509 12.195-10.509 7.524 0 11.351 4.606 12.065 10.638h.583c.779-5.513 4.087-10.638 12.454-10.638 8.368 0 12.454 5.514 12.454 12.909V95.35h-9.729V78.357c0-5.384-1.881-7.395-7.46-7.395-5.902 0-7.589 2.335-7.589 7.978v16.411h-9.73V78.357c0-5.384-1.881-7.395-7.459-7.395-5.903 0-7.589 2.335-7.589 7.978v16.411ZM223.521 95.351h-27.308v-43.46h26.076c8.886 0 13.686 3.763 13.686 10.574 0 5.384-2.854 9.275-10.119 9.794v.584c8.044.584 11.936 4.606 11.936 10.444 0 7.394-4.541 12.064-14.271 12.064ZM205.943 60.65v8.497h15.243c3.568 0 5.06-1.233 5.06-4.216 0-2.984-1.557-4.281-5.19-4.281h-15.113Zm0 16.54v9.406h16.411c3.956 0 5.578-1.233 5.578-4.736 0-3.437-1.622-4.67-5.578-4.67h-16.411ZM258.637 96c-10.833 0-18.228-5.319-18.228-16.865 0-10.378 7.33-16.93 18.033-16.93 10.638 0 17.708 5.579 17.708 15.763 0 1.167-.13 2.01-.259 3.113h-26.465c.259 4.995 2.594 7.135 8.886 7.135 5.773 0 7.784-1.492 7.784-4.28v-.65h9.73V84c0 7.07-6.876 12-17.189 12Zm-.39-26.205c-5.773 0-8.238 1.945-8.692 6.162h17.254c-.259-4.281-2.854-6.162-8.562-6.162ZM290.006 95.351h-9.73v-43.46h9.73v20.887h.519c1.037-5.513 4.865-10.573 13.167-10.573 8.757 0 13.038 5.709 13.038 13.233V95.35H307V78.357c0-5.449-2.335-7.395-8.432-7.395-6.551 0-8.562 2.66-8.562 8.108v16.281ZM331.37 59.546h-9.73v-7.654h9.73v7.654Zm0 35.805h-9.73V62.854h9.73v32.497ZM346.192 95.351h-9.729V62.854h9.016v9.99h.584c.843-5.45 4.735-10.639 13.232-10.639 8.887 0 13.103 5.709 13.103 12.909V95.35h-9.73V78.357c0-5.19-2.14-7.395-8.108-7.395-6.162 0-8.368 2.465-8.368 7.978v16.411ZM391.85 96c-10.119 0-15.698-6.616-15.698-16.865 0-10.378 5.514-16.93 15.179-16.93 7.719 0 11.675 3.827 12.778 9.276h.584v-19.59h9.73v43.46h-9.081v-9.016h-.519C403.59 92.757 399.309 96 391.85 96Zm-5.838-16.865c0 5.903 2.919 7.978 9.146 7.978 6.162 0 9.535-2.14 9.535-7.783v-.52c0-5.642-3.308-7.718-9.535-7.718s-9.146 2.076-9.146 8.043Z"
      />
    </svg>
  ),
  theTeamBehindSmall: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fill="#000"
        fillOpacity={0.25}
        d="M17.392 29.175H10.89V6.04H.093V.202h28.095V6.04H17.392v23.135ZM37.023 29.175h-6.504V.202h6.504v13.925h.346c.694-3.676 3.252-7.05 8.802-7.05 5.853 0 8.714 3.806 8.714 8.823v13.275h-6.503v-11.33c0-3.632-1.56-4.93-5.636-4.93-4.38 0-5.723 1.774-5.723 5.406v10.854ZM69.7 29.608c-7.24 0-12.183-3.546-12.183-11.244 0-6.919 4.899-11.286 12.053-11.286 7.11 0 11.836 3.719 11.836 10.508 0 .778-.087 1.34-.174 2.076H63.543c.174 3.33 1.734 4.757 5.94 4.757 3.858 0 5.203-.995 5.203-2.855v-.432h6.503v.476c0 4.713-4.596 8-11.49 8Zm-.26-17.47c-3.86 0-5.507 1.297-5.81 4.107h11.532c-.173-2.854-1.907-4.108-5.723-4.108ZM17.299 63.77h-6.503V40.635H0v-5.838h28.095v5.838H17.299V63.77ZM41.959 64.202c-7.24 0-12.183-3.546-12.183-11.243 0-6.919 4.899-11.287 12.053-11.287 7.11 0 11.836 3.72 11.836 10.509 0 .778-.087 1.34-.174 2.075H35.802c.174 3.33 1.734 4.757 5.94 4.757 3.859 0 5.203-.994 5.203-2.854v-.432h6.503v.475c0 4.714-4.596 8-11.49 8Zm-.26-17.47c-3.859 0-5.506 1.297-5.81 4.108h11.533c-.174-2.854-1.908-4.108-5.723-4.108ZM63.1 64.202c-4.683 0-7.501-2.162-7.501-5.794 0-3.2 2.385-5.19 7.024-5.665l9.321-.952v-.821c0-2.811-1.257-3.59-4.726-3.59-3.295 0-4.639.865-4.639 3.33v.173h-6.547v-.13c0-5.361 4.51-9.08 11.663-9.08 7.24 0 10.666 3.718 10.666 9.383V63.77h-6.07v-4.973h-.347c-.997 3.373-4.032 5.405-8.845 5.405Zm-.954-6.227c0 1.168.91 1.643 2.818 1.643 4.422 0 6.807-1.037 6.98-4.108l-7.544.865c-1.56.13-2.254.562-2.254 1.6ZM88.16 63.77h-6.503V42.105h6.026v6.573h.347c.52-3.633 2.688-7.005 8.151-7.005 5.029 0 7.587 3.07 8.064 7.091h.391c.52-3.675 2.731-7.092 8.324-7.092s8.324 3.676 8.324 8.606V63.77h-6.503V52.44c0-3.59-1.258-4.93-4.986-4.93-3.946 0-5.073 1.557-5.073 5.32v10.94h-6.503V52.44c0-3.59-1.257-4.93-4.986-4.93-3.945 0-5.073 1.557-5.073 5.32v10.94ZM149.402 63.77h-18.253V34.797h17.429c5.94 0 9.148 2.508 9.148 7.049 0 3.589-1.908 6.183-6.764 6.53v.388c5.376.39 7.978 3.07 7.978 6.963 0 4.93-3.035 8.043-9.538 8.043Zm-11.75-23.135V46.3h10.189c2.384 0 3.382-.822 3.382-2.811 0-1.99-1.041-2.854-3.469-2.854h-10.102Zm0 11.027v6.27h10.969c2.645 0 3.729-.822 3.729-3.157 0-2.292-1.084-3.113-3.729-3.113h-10.969ZM172.873 64.202c-7.241 0-12.183-3.546-12.183-11.243 0-6.919 4.899-11.287 12.052-11.287 7.111 0 11.837 3.72 11.837 10.509 0 .778-.087 1.34-.174 2.075h-17.689c.173 3.33 1.734 4.757 5.94 4.757 3.858 0 5.202-.994 5.202-2.854v-.432h6.504v.475c0 4.714-4.596 8-11.489 8Zm-.261-17.47c-3.858 0-5.506 1.297-5.809 4.108h11.532c-.173-2.854-1.907-4.108-5.723-4.108ZM193.84 63.77h-6.504V34.797h6.504V48.72h.347c.693-3.675 3.251-7.048 8.801-7.048 5.853 0 8.714 3.805 8.714 8.821V63.77h-6.503V52.44c0-3.632-1.561-4.93-5.636-4.93-4.379 0-5.723 1.773-5.723 5.406V63.77ZM221.487 39.9h-6.503v-5.103h6.503V39.9Zm0 23.87h-6.503V42.105h6.503V63.77ZM231.395 63.77h-6.503V42.105h6.026v6.66h.39c.564-3.633 3.165-7.093 8.845-7.093 5.939 0 8.758 3.806 8.758 8.606V63.77h-6.504V52.44c0-3.46-1.43-4.93-5.419-4.93-4.119 0-5.593 1.644-5.593 5.32v10.94ZM261.912 64.202c-6.763 0-10.492-4.41-10.492-11.243 0-6.919 3.685-11.287 10.145-11.287 5.16 0 7.804 2.552 8.541 6.184h.391v-13.06H277V63.77h-6.07v-6.011h-.347c-.823 4.281-3.685 6.443-8.671 6.443ZM258.01 52.96c0 3.935 1.951 5.319 6.113 5.319 4.119 0 6.374-1.427 6.374-5.19v-.345c0-3.762-2.211-5.146-6.374-5.146-4.162 0-6.113 1.384-6.113 5.362Z"
      />
    </svg>
  ),
};