import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
const Cards = ({handleCreditHour}) => {
    const [courses, setCourses] = useState([]);
    console.log(courses);

    useEffect(() => {
        fetch('./course.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);
    return (
        <div className='grid grid-cols-3 gap-4 py-8'>
            {courses.map(course => <Card handleCreditHour={handleCreditHour} course={course} ></Card>)}
        </div>
    );
};

export default Cards;