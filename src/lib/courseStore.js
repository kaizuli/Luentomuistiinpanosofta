import { writable } from "svelte/store";

const courses = writable(['Frontend', 'Python', 'Tietokannat'])

const setCourse = (selectedCourse) => {
    courses.set(selectedCourse)
}

function createCourses() {
    let frontend = {id:0, name:'Frontend'}
    let python = {id:1, name:'Python'}
    let tietokannat = {id:2, name:'Tietokannat'}
    let og_courses = [frontend, python, tietokannat]

    const {subscribe, set, update} = writable(og_courses)

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