"use client"
import styles from './components.module.css' 
import styled from 'styled-components'
import Image from '../components/Image'
import NavigateHeader from './NavigateHeader'

const BlockTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-left: 50px
`

export default function Banner(){
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