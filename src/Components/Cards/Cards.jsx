import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
const Cards = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);

    useEffect(() => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className='grid grid-cols-3'>
            {courses.map(course => <Card course={course} ></Card>)}
        </div>
    );
};

export default Cards;