import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/navbar/Navbar";


export default function Home() {
    
    return (
        <div>
            <Head>
                <title>Md Abdur Rahman's Portfolio</title>
                <meta name="description" content="Md Abdur Rahman Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Link href={"/about"}> <h1>Go to about</h1></Link>
            </main>
        </div>
    );
}
