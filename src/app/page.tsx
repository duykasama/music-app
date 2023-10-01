'use client'
import {Header} from "@/components/home/header/Header";
import {Category} from "@/components/home/main/Category";
import {useEffect} from "react";
import useFetch from "@/hooks/useFetch";
import {CATEGORIES_ENDPOINT} from "@/lib/api/apiInfo";
import Link from "next/link";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default function Home() {
    const {data} = useFetch(CATEGORIES_ENDPOINT)
    const categories: Category[] | undefined = data?.categories.items
    const auth = useSelector((state: RootState) => state.auth)
  return (
      <>
        <header className="row-span-1 p-6 flex flex-col justify-between">
            <Header />
            <h2>Good afternoon</h2>
        </header>
        <section className="row-span-5 flex flex-col overflow-y-scroll">
            <Link href="/test">Get access token</Link>
            {auth.accessToken ? (
                <h2>Access token exists: {auth.accessToken}</h2>
            ) : (
                <h2>Access token is missing</h2>
            )}
            {data ? (
                <h2>Categories found</h2>
            )
            : (
                <h2>Categories not found</h2>
            )}
            {
                categories && categories.length > 0 && (
                    <>
                        <div>something</div>
                        {
                            categories.map((category) => (
                                <div key={category.id}>
                                    {category.name}
                                </div>
                            ))}
                    </>
                )
            }
        </section>
      </>
  )
}
