import { writable } from "svelte/store";

const courses = writable([
    {id:0, name:'Frontend'},
    {id:1, name:'Python'},
    {id:2, name:'Tietokannat'}
])

const setCourse = (selectedCourse) => {
    courses.set(selectedCourse)
}

function createCourses() {

    const {subscribe, set, update} = writable([])

    const addCourse = (course) => {
        update((courses) => {
            let id = courses.length
            return [...courses, {id, ...course}]
        })
    }

    return {
        subscribe,
        add:addCourse,
        reset: () => set([])
    }
}

export {courses, setCourse}
// export const courses = createCourses()