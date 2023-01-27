import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import NavBar from "../Components/NavBar"
import Disconnected from '../Components/Disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../Components/Connected"

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
					{ /* NavBar */ }
          <NavBar />
          <Spacer />
          <Center>{connected ? <Connected /> : <Disconnected />}</Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/manojrohtela"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @manojrohtela
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home