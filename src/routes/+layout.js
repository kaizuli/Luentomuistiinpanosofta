import { courses } from "$lib/courseStore.js"
import { notes } from "$lib/noteStore.js"

export async function load({fetch}) {
    try {
        //Fetch courses
        const coursesRes = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses')
        const coursesData = await coursesRes.json()
        console.log('Feetch:',coursesData)
        courses.populate(coursesData)
        //Fetch notes
        const notesRes = await fetch('https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes')
        const notesData = await notesRes.json()
        console.log('Muistifetch:',notesData)
        notes.populate(notesData)

        return { courses: coursesData, notes: notesData }
    } catch (error) {
        console.error('Error fetching courses:', error)
        throw error
    }
}
