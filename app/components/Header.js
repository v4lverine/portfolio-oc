"use client"
import styles from './components.module.scss' 
import styled from 'styled-components'
import Image from './ShortImage'
import NavigateHeader from './NavigateHeader'
// import React, {useState, useEffect} from 'react'

const BlockTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-left: 50px
`

export default function Header(){

    return(
        <header className={styles.header}>
            <BlockTitle>
                <Image src='/images/icon.jpg' alt='Logo du site de valverine'/>
                <h1 className={styles.h1}>valverine - Développeuse web</h1>
            </BlockTitle>
            <nav>
                <NavigateHeader />
            </nav>
        </header>
    )
}