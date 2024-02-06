import {readFile} from 'fs/promises'

export async function selectCards(): Promise<any> {
    try {
        const data = await readFile('../data/cards.json', 'utf-8')
        console.log(data)
        return data
    } catch (error) {
        console.error('Error reading cards.json')
    }       
}