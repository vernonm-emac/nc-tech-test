import {readFile} from 'fs/promises'

export async function selectCards(): Promise<any> {
    try {
        const data = await readFile(`${__dirname}/../data/cards.json`, 'utf-8')
        const parsedData = JSON.parse(data)
        return parsedData
    } catch (error) {
        console.error('Error reading cards.json')
    }       
}