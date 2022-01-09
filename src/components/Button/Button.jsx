import React from 'react'
import styles from './Button.module.css'
const Button = ({label}) => {
    return (
        <div className={styles.button_container}>
            <button>{label}</button>
        </div>
    )
}

export default Button
