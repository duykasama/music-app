'use client'
import {Provider} from "react-redux";
import store from "@/redux/store";
import {ReactNode} from "react";

export default function StateProvider({children}: {children: ReactNode}) {
    return <Provider store={store}>
        {children}
    </Provider>
}