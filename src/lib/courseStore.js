import { writable } from "svelte/store";

// const setCourse = (selectedCourse) => {
//     courses.set(selectedCourse)
// }

function createCourses() {
    const {subscribe, set, update} = writable([])
    
    return {
        subscribe,
        add: (course) => update((existingCourses) => [...existingCourses, course]),
        reset: () => set([]),
        populate: (courses) => set(courses) 
    }
}

// export {courses, setCourse}
export const courses = createCourses()
