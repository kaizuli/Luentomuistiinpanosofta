import { courses } from "$lib/courseStore.js"

export async function load({fetch}) {
    try {
        const res = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses')
        const data = await res.json()
        console.log('Feetch:',data)

        courses.populate(data)
        return { context: { courses: data } }
    } catch (error) {
        console.error('Error fetching courses:', error)
        throw error
    }
}