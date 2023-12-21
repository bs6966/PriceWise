"use server"

import { connectToDB } from "../mongoose";
import { scrapedAmazonProduct } from "../scraper";



export async function scrapeAndStoreProduct(productUrl : string) {
    if(!productUrl) return;

    try {
        connectToDB();

        const scrapedProduct = await scrapedAmazonProduct(productUrl)
        if(!scrapedProduct) return;



    }catch(error : any){
        throw new Error('Failed to create/Update product')
    }
}