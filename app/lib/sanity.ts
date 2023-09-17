import { createClient } from "next-sanity";


const projectId =   'roq71n5k'
const dataset = "production"
const apiVersion = '2023-08-25'


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  });
  