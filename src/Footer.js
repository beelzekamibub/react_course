import React from 'react'

export default function () {
    const today=new Date();
    return (
    <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}
