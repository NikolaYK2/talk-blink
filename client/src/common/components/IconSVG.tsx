type Props = {
  name: 'logo' | 'addMessage' | 'ava'
}
export const IconSvg = ({name}: Props) => {
  switch (name) {
    case "logo": {
      return <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
        <path d="M44 16V36H29L24 41L19 36H4V6H34" stroke="#000000" strokeWidth="4" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M23 20H25.0025" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <path d="M33.0011 20H35" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <path d="M13.001 20H14.9999" stroke="#000000" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="43" cy="7" r="3" fill="#000000"/>
      </svg>
    }
    case "addMessage": {
      return <svg height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
      </svg>
    }
    case "ava": {
      return <svg enableBackground="new 0 0 32 32" height="100%" id="svg2" version="1.1" viewBox="0 0 32 32"
                  width="100%" xmlns="http://www.w3.org/2000/svg">
        <g id="background">
          <rect fill="none" height="32" width="32" x="0" y="0"/>
        </g>
        <g id="avatar">
          <path
            d="M28,18h-3.908c1.2-3.135,1.905-6.85,1.908-10.597c0-1.789-0.492-3.471-1.349-4.914l-0.474-0.797l-0.829,0.41   c-0.001,0.001-0.533,0.263-1.359,0.602C20.523,1.047,18.386,0,16,0c-2.387,0-4.527,1.048-5.993,2.707   c-0.827-0.339-1.36-0.602-1.362-0.6l-0.832-0.41L7.342,2.493C6.488,3.937,6,5.618,6,7.403C6.002,11.15,6.707,14.865,7.906,18   C4.455,18,4,18,4,18s-4,0.167-4,4c0,2,0,10,0,10h32V22C32,22,32,18,28,18z M21.467,19.058c-1.555,3.172-3.632,4.987-5.468,4.942   c-1.836,0.045-3.914-1.771-5.468-4.942c-1.548-3.132-2.534-7.409-2.532-11.654c0-1.104,0.234-2.148,0.655-3.098   c1.498,0.656,4.615,1.876,7.345,1.897c2.728-0.023,5.846-1.246,7.343-1.902c0.423,0.95,0.657,1.996,0.657,3.102   C24.003,11.648,23.015,15.926,21.467,19.058z M11,16c0,0,1,4,5,4c3.917,0,5-4,5-4s-3,1-5,1S11,16,11,16z M15,10c0,0-1-2-3-2   s-3,2-3,2s2,0,3,0S15,10,15,10z M20,8c-2,0-3,2-3,2s2,0,3,0s3,0,3,0S22,8,20,8z"/>
        </g>
      </svg>
    }

    default: {
      return <svg></svg>
    }
  }
};
