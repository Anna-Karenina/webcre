import * as React from 'react';

type SvgsProps = {
  styleprop?:any
}

const Arrow: React.FC<SvgsProps> = ({styleprop}) => {
  const [fillColor, setFillcolor] = React.useState('#c9c9c9c9')

  const onHover = () =>{
    setFillcolor(  'url(#linear-gradient)'  )
  }
  const offHover = () =>{
    setFillcolor('#c9c9c9c9')
  }
  return(
    <svg width="32" height="32" viewBox="0 0 32 32" fill={fillColor} xmlns="http://www.w3.org/2000/svg" onMouseEnter = {onHover} onMouseLeave = {offHover}  >
      <linearGradient id="linear-gradient">
        <stop offset="0%" stopColor="#93E08C"/>
        <stop offset="100%" stopColor="#78CEBF"/>
      </linearGradient>
    <path d="M15.9992 0C7.17884 0.00159992 0.00159992 7.17884 0 16.0008C0 24.8228 7.17724 32 16.0008 32C24.8228 31.9984 32 24.8212 32 16.0008C32 7.17884 24.8228 0.00159992 15.9992 0ZM16.0008 28.8002C8.94195 28.8002 3.19984 23.058 3.19984 16.0008C3.20144 8.94355 8.94355 3.20144 15.9992 3.19984C23.058 3.20144 28.8002 8.94355 28.8002 16.0008C28.8002 23.0564 23.058 28.7986 16.0008 28.8002Z" fill={fillColor}/>
    <path d="M16.02 9.59302L9.6123 16.0007L16.02 22.4068V17.6006H22.4101V14.4008H16.02V9.59302Z" fill={fillColor}/>
    </svg>
  )
}
export default Arrow