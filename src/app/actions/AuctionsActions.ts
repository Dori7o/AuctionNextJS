'use server'

import { Auction, PageResult } from "../../../types";
import { getTokenWorkAround } from "./authActions";

export async function getData(query: string ): Promise<PageResult<Auction>> {
    const res = await fetch(`http://localhost:6001/search${query}`)

    if (!res.ok)
        {
            throw new Error('Failed to fetch data');
        }
    return res.json();
}

export async function UpdateActionTest() {
    const data = {
        mileage: 100
    }
    const token = await getTokenWorkAround();

    const res = await fetch("http://localhost:6001/auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c", {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token?.acess_token
        },
        body : JSON.stringify(data)
    })

    if(!res.ok) return {status: res.status, message: res.statusText, responseHeader: res.headers}

    return res.statusText;
}