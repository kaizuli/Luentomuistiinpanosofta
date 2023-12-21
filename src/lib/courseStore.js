import { writable } from "svelte/store";

// const setCourse = (selectedCourse) => {
//     courses.set(selectedCourse)
// }

function createCourses() {
    const {subscribe, set, update} = writable([])

    // const addCourse = (course) => {
    //     update((courses) => {
    //         let id = courses.length
    //         return [...courses, {id, ...course}]
    //     })
    // }
    
    return {
        subscribe,
        add: (course) => update((existingCourses) => [...existingCourses, course]),
        reset: () => set([]),
        populate: (courses) => set(courses) 
    }
}

// export function addFetchedCourses(fetchedCourses) {
//     courseStore.
// }
// export {courses, setCourse}
export const courses = createCourses()
