import React from 'react'

const AboutLayout = ({
    children
}:{
    children:React.ReactNode
}) => {
  return (
    <html>
        <body>
            <header>This is the about header</header>
            {children}
        </body>
    </html>
  )
}

export default AboutLayout
