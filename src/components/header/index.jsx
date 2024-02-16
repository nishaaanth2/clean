'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';

export default function Index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
{/* <div className={`${!isActive ? 'bg-transparent' : 'bg-slate-400'} ${styles.header}`}> */}
            <div className={styles.bar}>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                </div>
                
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
