type Props = {
  name: 'logo' | 'addMessage'
}
export const IconSvg = ({name}: Props) => {
  switch (name) {
    case "logo": {
      return <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
        <path d="M44 16V36H29L24 41L19 36H4V6H34" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 20H25.0025" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <path d="M33.0011 20H35" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <path d="M13.001 20H14.9999" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="43" cy="7" r="3" fill="#000000"/>
      </svg>
    }
    case "addMessage": {
      return<svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
      </svg>
    }
    default: {
      return <svg></svg>
    }
  }
};
